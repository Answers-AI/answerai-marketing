import gql from 'graphql-tag';
import { ContentfulPathsGenerator, ContentfulLoaders, ApolloContext } from '@last-rev/types';
import { getLocalizedField, getDefaultFieldValue } from '@last-rev/graphql-contentful-core';
import { format } from 'date-fns';

import headerResolver from './resolvers/headerResolver';
import globalFooterResolver from './resolvers/globalFooterResolver';
import pageBreadcrumbsResolver from './resolvers/pageBreadcrumbsResolver';
// import relatedItemsResolver from './resolvers/relatedItemsResolver';
import hrefUrlResolver from './resolvers/hrefUrlResolver';
import seoBlogResolver from './resolvers/seoBlogResolver';
import createType from './utils/createType';
import getPathUrl from './utils/getPathUrl';
import createRichText from './utils/createRichText';
import createPath from './utils/createPath';

export const typeDefs = gql`
  type Blog {
    header: Header
    blogCategories: [CategoryBlog]
    relatedItems: [Link]
    author: Person
    breadcrumbs: [Link]
    contents: [Content]
    modelUsed: [String]
    promptedBy: [String]
    imagesGeneratedBy: [String]
  }
`;

export const mappers = {
  Blog: {
    Blog: {
      header: headerResolver,
      footer: globalFooterResolver,
      breadcrumbs: pageBreadcrumbsResolver,
      pubDate: async (ref: any, _args: any, ctx: ApolloContext) => {
        const pubDate = getLocalizedField(ref?.fields, 'pubDate', ctx);
        return pubDate && format(new Date(pubDate), 'MMMM dd, yyyy');
      },
      // relatedItems: relatedItemsResolver,
      seo: seoBlogResolver
    },
    Link: {
      href: hrefUrlResolver
    },
    Card: {
      eyebrow: () => {
        return 'Blog';
      },
      media: async (ref: any, _args: any, ctx: ApolloContext) => {
        const listImageRef = getLocalizedField(ref?.fields, 'listImage', ctx);
        const featuredMediaRef = getLocalizedField(ref?.fields, 'featuredMedia', ctx);
        const listImage = await ctx.loaders.assetLoader.load({
          id: listImageRef?.sys?.id ?? featuredMediaRef?.sys?.id,
          preview: !!ctx.preview
        });
        if (listImage) return [listImage];
        return null;
      },
      categories: async (ref: any, _args: any, ctx: ApolloContext) => {
        const categoriesRef: any = getLocalizedField(ref.fields, 'categories', ctx);
        const itemsIds =
          categoriesRef?.map((content: any) => {
            return { id: content?.sys.id, preview: !!ctx.preview };
          }) ?? [];
        const items: any[] = (await ctx.loaders.entryLoader.loadMany(itemsIds?.slice(0, 1))).filter(Boolean);

        return Promise.all(
          items?.map(async (item) => {
            const catTitle = getLocalizedField(item?.fields, 'title', ctx);
            const catSlug = getLocalizedField(item?.fields, 'slug', ctx);
            const catMediaRef = getLocalizedField(item?.fields, 'media', ctx);
            const catMediaItem = await ctx.loaders.assetLoader.load({
              id: catMediaRef?.[0]?.sys?.id,
              preview: !!ctx.preview
            });
            const catMedia = [];
            if (catMediaItem) catMedia.push(catMediaItem);
            const ctaItem = getLocalizedField(item?.fields, 'ctaItem', ctx);

            return createType('category', {
              id: item?.sys?.id,
              title: catTitle,
              slug: catSlug,
              media: catMedia,
              colorScheme: 'Light',
              ctaItem
            });
          })
        );
      },
      body: async (ref: any, _args: any, ctx: ApolloContext) => {
        const summary: any = getLocalizedField(ref.fields, 'summary', ctx);
        if (summary) return createRichText(summary);
        return;
      },
      link: async (ref: any, _args: any, ctx: ApolloContext) => {
        const path = await getPathUrl(ref, ctx);
        return createType('Link', {
          id: ref?.sys?.id,
          manualUrl: path
        });
      },
      actions: async (ref: any, _args: any, ctx: ApolloContext) => {
        const path = await getPathUrl(ref, ctx);
        return [
          createType('Link', {
            id: ref?.sys?.id,
            text: 'Learn More',
            variant: 'CTA 3',
            manualUrl: path
          })
        ];
      }
    }
  }
};

// only checking for the first item
const generateParentPaths = async (
  blog: any,
  loaders: ContentfulLoaders,
  defaultLocale: string,
  preview?: boolean,
  paths: string[] = []
): Promise<string[]> => {
  const parentPageRef = getDefaultFieldValue(blog, 'parentPage', defaultLocale);

  if (parentPageRef) {
    const parentPage = await loaders.entryLoader.load({ id: parentPageRef.sys.id, preview: !!preview });
    if (parentPage) {
      const parentSlug = getDefaultFieldValue(parentPage as any, 'slug', defaultLocale);
      paths.push(parentSlug);
      return generateParentPaths(parentPage, loaders, defaultLocale, preview, paths);
    }
  }

  return paths;
};

const generatePaths: ContentfulPathsGenerator = async (
  blogItem,
  loaders,
  defaultLocale,
  _locales,
  preview = false,
  _site
) => {
  const slug = getDefaultFieldValue(blogItem, 'slug', defaultLocale);

  const paths = await generateParentPaths(blogItem, loaders, defaultLocale, preview);

  paths.reverse().push(slug);

  const fullPath = createPath(...paths);
  const excludedLocales = getDefaultFieldValue(blogItem, 'excludeFromLocale', defaultLocale) || [];

  return {
    [fullPath]: {
      fullPath,
      isPrimary: true,
      contentId: blogItem?.sys?.id,
      excludedLocales
    }
  };
};

export const pathsConfigs = {
  blog: generatePaths
};
