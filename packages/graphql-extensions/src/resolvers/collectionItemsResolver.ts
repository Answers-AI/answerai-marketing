import { ApolloContext } from '@last-rev/types';
import { getLocalizedField } from '@last-rev/graphql-contentful-core';
import { format } from 'date-fns';

import createType from '../utils/createType';
import getPathReader from '../utils/getPathReader';

const getCustomerLogos = async (ref: any, _args: any, ctx: ApolloContext) => {
  const itemsRef = getLocalizedField(ref?.fields, 'items', ctx);
  const imagesRef = getLocalizedField(ref?.fields, 'images', ctx);
  const mediaIds =
    imagesRef?.map((content: any) => {
      return { id: content?.sys.id, preview: !!ctx.preview };
    }) ?? [];
  const mediaItems = (await ctx.loaders.assetLoader.loadMany(mediaIds)).filter(Boolean);

  if (!!mediaItems?.length)
    return mediaItems?.map((item: any) => {
      return createType('Media', {
        id: item?.sys?.id,
        __typename: 'Media',
        title: getLocalizedField(item?.fields, 'title', ctx),
        variant: 'image',
        file: getLocalizedField(item?.fields, 'file', ctx),
        placeholder: null
      });
    });

  const itemsIds =
    itemsRef?.map((content: any) => {
      return { id: content?.sys.id, preview: !!ctx.preview };
    }) ?? [];
  const items: any[] = (await ctx.loaders.entryLoader.loadMany(itemsIds)).filter(Boolean);
  const results = await Promise.all(
    items.map(async (item) => {
      const mediaRef = getLocalizedField(item?.fields, 'media', ctx);
      const featuredMedia = await ctx.loaders.assetLoader.load({
        id: mediaRef?.[0]?.sys?.id,
        preview: !!ctx.preview
      });
      return createType('Media', {
        id: item.sys.id,
        __typename: 'Media',
        title: getLocalizedField(featuredMedia?.fields, 'title', ctx),
        variant: 'image',
        file: getLocalizedField(featuredMedia?.fields, 'file', ctx),
        placeholder: null
      });
    })
  );
  return results;
};

const getResourcesFilter = async (_ref: any, _args: any, ctx: ApolloContext) => {
  const cardVariant = 'Resource';
  const cardLinkVariant = 'CTA 5';
  const blogItems = await ctx.loaders.entriesByContentTypeLoader.load({ id: 'blog', preview: !!ctx.preview });

  const blogCards = await Promise.all(
    blogItems.map(async (blog: any) => {
      const title = getLocalizedField(blog?.fields, 'title', ctx);
      const listImageRef = getLocalizedField(blog?.fields, 'listImage', ctx);
      const featuredMediaRef = getLocalizedField(blog?.fields, 'featuredMedia', ctx);
      const pubDate = getLocalizedField(blog?.fields, 'pubDate', ctx);
      const media = [];
      if (listImageRef) media.push(listImageRef);
      else if (featuredMediaRef) media.push(featuredMediaRef);
      const actions = [];
      const path = await getPathReader(ctx)?.getPathsByContentId(blog?.sys?.id ?? '', undefined, process.env.SITE);
      actions.push(
        createType('link', {
          text: ' ',
          variant: cardLinkVariant,
          manualUrl: path?.[0] ?? '#'
        })
      );

      const categoryTopicsRef: any = getLocalizedField(blog?.fields, 'categoryTopics', ctx);
      const categoryTopicsIds =
        categoryTopicsRef?.map((content: any) => {
          return { id: content?.sys.id, preview: !!ctx.preview };
        }) ?? [];
      const topics = categoryTopicsRef?.map((content: any) => content?.sys.id);
      const categoryTopicsItems: any[] = !!categoryTopicsIds?.length
        ? (await ctx.loaders.entryLoader.loadMany(categoryTopicsIds.slice(0, 1))).filter(Boolean)
        : [];

      const categoryTopics = await Promise.all(
        categoryTopicsItems?.map(async (item) => {
          const catTitle = getLocalizedField(item?.fields, 'title', ctx);
          const catSlug = getLocalizedField(item?.fields, 'slug', ctx);
          const catMedia = [];
          const catMediaRef = getLocalizedField(item?.fields, 'media', ctx);
          const catMediaItem =
            catMediaRef?.[0]?.sys?.id &&
            (await ctx.loaders.assetLoader.load({
              id: catMediaRef?.[0]?.sys?.id,
              preview: !!ctx.preview
            }));
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

      const categoriesRef: any = getLocalizedField(blog?.fields, 'categories', ctx);
      const types: string[] = categoriesRef?.map((content: any) => content?.sys.id);

      return createType('card', {
        id: blog?.sys?.id,
        title,
        variant: cardVariant,
        actions,
        categories: categoryTopics,
        media,
        filters: {
          topics,
          types,
          contentTypes: ['blog']
        },
        orderBy: {
          pubDate
        }
      });
    })
  );

  const newsItems = await ctx.loaders.entriesByContentTypeLoader.load({ id: 'news', preview: !!ctx.preview });

  const newsCards = await Promise.all(
    newsItems.map(async (news: any) => {
      const title = getLocalizedField(news?.fields, 'title', ctx);
      const pubDate = getLocalizedField(news?.fields, 'pubDate', ctx);
      const eyebrow = pubDate && format(new Date(pubDate), 'MMMM dd, yyyy');
      const listImageRef = getLocalizedField(news?.fields, 'listImage', ctx);
      const media = [];
      if (listImageRef) media.push(listImageRef);
      const actions = [];
      const manualUrl = getLocalizedField(news?.fields, 'manualUrl', ctx);
      if (manualUrl && manualUrl.trim() !== '')
        actions.push(
          createType('link', {
            text: ' ',
            variant: cardLinkVariant,
            manualUrl: manualUrl ?? '#'
          })
        );

      const categoryTopicsRef: any = getLocalizedField(news?.fields, 'categoryTopics', ctx);
      const topics: string[] = ([] = categoryTopicsRef?.map((content: any) => content?.sys.id) ?? []);

      const categoriesRef: any = getLocalizedField(news?.fields, 'categories', ctx);
      const types: string[] = categoriesRef?.map((content: any) => content?.sys.id);

      return createType('card', {
        id: news?.sys?.id,
        title,
        eyebrow,
        variant: cardVariant,
        actions,
        media,
        filters: {
          topics,
          types,
          contentTypes: ['news']
        },
        orderBy: {
          pubDate
        }
      });
    })
  );

  const customerStoryItems = await ctx.loaders.entriesByContentTypeLoader.load({
    id: 'customerStory',
    preview: !!ctx.preview
  });

  const customerStoryCards = await Promise.all(
    customerStoryItems.map(async (customerStory: any) => {
      const title = getLocalizedField(customerStory?.fields, 'title', ctx);
      const pubDate = getLocalizedField(customerStory?.fields, 'pubDate', ctx);
      const listImageRef = getLocalizedField(customerStory?.fields, 'listImage', ctx);
      const featuredMediaRef = getLocalizedField(customerStory?.fields, 'featuredMedia', ctx);
      const media = [];
      if (listImageRef) media.push(listImageRef);
      else if (featuredMediaRef) media.push(featuredMediaRef);
      const path = await getPathReader(ctx)?.getPathsByContentId(
        customerStory?.sys?.id ?? '',
        undefined,
        process.env.SITE
      );
      const actions = [];
      actions.push(
        createType('link', {
          text: ' ',
          variant: cardLinkVariant,
          manualUrl: path?.[0] ?? '#'
        })
      );

      const categoryTopicsRef: any = getLocalizedField(customerStory?.fields, 'categoryTopics', ctx);
      const categoryTopicsIds =
        categoryTopicsRef?.map((content: any) => {
          return { id: content?.sys.id, preview: !!ctx.preview };
        }) ?? [];
      const topics = categoryTopicsRef?.map((content: any) => content?.sys.id);
      const categoryTopicsItems: any[] = !!categoryTopicsIds?.length
        ? (await ctx.loaders.entryLoader.loadMany(categoryTopicsIds.slice(0, 1))).filter(Boolean)
        : [];

      const categoryTopics = await Promise.all(
        categoryTopicsItems?.map(async (item) => {
          const catTitle = getLocalizedField(item?.fields, 'title', ctx);
          const catSlug = getLocalizedField(item?.fields, 'slug', ctx);
          const catMediaRef = getLocalizedField(item?.fields, 'media', ctx);
          const catMediaItem =
            catMediaRef?.[0]?.sys?.id &&
            (await ctx.loaders.assetLoader.load({
              id: catMediaRef?.[0]?.sys?.id,
              preview: !!ctx.preview
            }));
          const catMedia = [];
          if (catMediaItem) catMedia.push(catMediaItem);

          const ctaItem = getLocalizedField(item?.fields, 'ctaItem', ctx);

          return createType('category', {
            id: item?.sys?.id,
            title: catTitle,
            slug: catSlug,
            media: catMedia,
            colorScheme: 'Dark',
            ctaItem
          });
        })
      );

      const categoriesRef: any = getLocalizedField(customerStory?.fields, 'categories', ctx);
      const types: string[] = categoriesRef?.map((content: any) => content?.sys.id);

      return createType('card', {
        id: customerStory?.sys?.id,
        title,
        variant: cardVariant,
        actions,
        categories: categoryTopics,
        media,
        filters: {
          topics,
          types,
          contentTypes: ['customerStory']
        },
        orderBy: {
          pubDate
        }
      });
    })
  );

  const webinarItems = await ctx.loaders.entriesByContentTypeLoader.load({ id: 'pageWebinar', preview: !!ctx.preview });

  const webinarCards = await Promise.all(
    webinarItems.map(async (webinar: any) => {
      const title = getLocalizedField(webinar?.fields, 'title', ctx);
      const pubDate = getLocalizedField(webinar?.fields, 'pubDate', ctx);
      const listImageRef = getLocalizedField(webinar?.fields, 'listImage', ctx);
      const media = [];
      if (listImageRef) media.push(listImageRef);
      const actions = [];
      const path = await getPathReader(ctx)?.getPathsByContentId(webinar?.sys?.id ?? '', undefined, process.env.SITE);
      actions.push(
        createType('link', {
          text: ' ',
          variant: cardLinkVariant,
          manualUrl: path?.[0] ?? '#'
        })
      );

      const categoryTopicsRef: any = getLocalizedField(webinar?.fields, 'categoryTopics', ctx);
      const categoryTopicsIds =
        categoryTopicsRef?.map((content: any) => {
          return { id: content?.sys.id, preview: !!ctx.preview };
        }) ?? [];
      const topics = categoryTopicsRef?.map((content: any) => content?.sys.id);
      const categoryTopicsItems: any[] = !!categoryTopicsIds?.length
        ? (await ctx.loaders.entryLoader.loadMany(categoryTopicsIds.slice(0, 1))).filter(Boolean)
        : [];

      const categoryTopics = await Promise.all(
        categoryTopicsItems?.map(async (item) => {
          const catTitle = getLocalizedField(item?.fields, 'title', ctx);
          const catSlug = getLocalizedField(item?.fields, 'slug', ctx);
          const catMedia = [];
          const catMediaRef = getLocalizedField(item?.fields, 'media', ctx);
          const catMediaItem =
            catMediaRef?.[0]?.sys?.id &&
            (await ctx.loaders.assetLoader.load({
              id: catMediaRef?.[0]?.sys?.id,
              preview: !!ctx.preview
            }));
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

      const categoriesRef: any = getLocalizedField(webinar?.fields, 'categories', ctx);
      const types: string[] = categoriesRef?.map((content: any) => content?.sys.id);

      return createType('card', {
        id: webinar?.sys?.id,
        title,
        variant: cardVariant,
        actions,
        categories: categoryTopics,
        media,
        filters: {
          topics,
          types,
          contentTypes: ['webinar']
        },
        orderBy: {
          pubDate
        }
      });
    })
  );

  const cards = [...blogCards, ...newsCards, ...customerStoryCards, ...webinarCards];
  cards.sort((a, b) => {
    const pubDateA = getLocalizedField(a?.fields, 'orderBy', ctx)?.pubDate;
    const pubDateB = getLocalizedField(b?.fields, 'orderBy', ctx)?.pubDate;

    return pubDateA > pubDateB ? -1 : pubDateB > pubDateA ? 1 : 0;
  });
  return cards;
};

const getIntegrationsFilter = async (ref: any, _args: any, ctx: ApolloContext) => {
  const itemsRef = getLocalizedField(ref?.fields, 'items', ctx);
  if (!itemsRef?.length) return null;
  const itemsIds =
    itemsRef?.map((content: any) => {
      return { id: content?.sys.id, preview: !!ctx.preview };
    }) ?? [];
  const items: any[] = (await ctx.loaders.entryLoader.loadMany(itemsIds)).filter(Boolean);
  const cardVariant = 'Integration Filter';

  const results = await Promise.all(
    items.map(async (item) => {
      const title = getLocalizedField(item?.fields, 'title', ctx);
      const description = getLocalizedField(item?.fields, 'description', ctx);
      const media = [];
      const mediaRef = getLocalizedField(item?.fields, 'media', ctx);
      const featuredMedia =
        mediaRef?.[0]?.sys?.id &&
        (await ctx.loaders.assetLoader.load({
          id: mediaRef?.[0]?.sys?.id,
          preview: !!ctx.preview
        }));
      if (featuredMedia) media.push(featuredMedia);
      const actions = [];
      const link = getLocalizedField(item?.fields, 'link', ctx);
      if (link) actions.push(link);

      const categoriesRef: any = getLocalizedField(item?.fields, 'categories', ctx);
      const categoriesIds =
        categoriesRef?.map((content: any) => {
          return { id: content?.sys.id, preview: !!ctx.preview };
        }) ?? [];
      const types = categoriesRef?.map((content: any) => content?.sys.id);
      const categoriesItems: any[] = !!categoriesIds?.length
        ? (await ctx.loaders.entryLoader.loadMany(categoriesIds.slice(0, 1))).filter(Boolean)
        : [];

      const categories = await Promise.all(
        categoriesItems?.map(async (category) => {
          const catTitle = getLocalizedField(category?.fields, 'title', ctx);
          const catSlug = getLocalizedField(category?.fields, 'slug', ctx);
          const catMedia = [];
          const catMediaRef = getLocalizedField(category?.fields, 'media', ctx);
          const catMediaItem =
            catMediaRef?.[0]?.sys?.id &&
            (await ctx.loaders.assetLoader.load({
              id: catMediaRef?.[0]?.sys?.id,
              preview: !!ctx.preview
            }));
          if (catMediaItem) catMedia.push(catMediaItem);

          const ctaItem = getLocalizedField(category?.fields, 'ctaItem', ctx);

          return createType('category', {
            id: category?.sys?.id,
            title: catTitle,
            slug: catSlug,
            media: catMedia,
            colorScheme: 'Light',
            ctaItem
          });
        })
      );

      return createType('card', {
        id: item?.sys?.id,
        variant: cardVariant,
        title,
        subtitle: description,
        actions,
        categories,
        media,
        filters: {
          types
        }
      });
    })
  );
  return results;
};

const getResourcesList = async (ref: any, _args: any, ctx: ApolloContext) => {
  const itemsRef = getLocalizedField(ref?.fields, 'items', ctx);
  if (!itemsRef?.length) return null;
  const itemsIds =
    itemsRef?.map((content: any) => {
      return { id: content?.sys.id, preview: !!ctx.preview };
    }) ?? [];
  const items: any[] = (await ctx.loaders.entryLoader.loadMany(itemsIds)).filter(Boolean);
  const cardLinkVariant = 'CTA 5';
  const cardVariant = 'Resource';
  const results = await Promise.all(
    items.map(async (item) => {
      const contentType = item?.sys?.contentType?.sys?.id;
      const title = getLocalizedField(item?.fields, 'title', ctx);

      const media = getLocalizedField(item?.fields, 'media', ctx) ?? [];
      const listImageRef = getLocalizedField(item?.fields, 'listImage', ctx);
      const listImage =
        listImageRef?.sys?.id &&
        (await ctx.loaders.assetLoader.load({
          id: listImageRef?.sys?.id,
          preview: !!ctx.preview
        }));
      const featuredMediaRef = getLocalizedField(item?.fields, 'featuredMedia', ctx);
      const featuredMedia =
        featuredMediaRef?.sys?.id &&
        (await ctx.loaders.assetLoader.load({
          id: featuredMediaRef?.sys?.id,
          preview: !!ctx.preview
        }));
      if (listImage) media.push(listImage);
      else if (featuredMedia) media.push(featuredMedia);

      const actions = getLocalizedField(item?.fields, 'actions', ctx) ?? [];
      const path = await getPathReader(ctx)?.getPathsByContentId(item?.sys?.id ?? '', undefined, process.env.SITE);
      const manualUrl = getLocalizedField(item?.fields, 'manualUrl', ctx);
      actions.push(
        createType('link', {
          text: ' ',
          variant: cardLinkVariant,
          manualUrl: path?.[0] ?? manualUrl ?? '#'
        })
      );

      const pubDate = getLocalizedField(item?.fields, 'pubDate', ctx);
      const eyebrow = contentType === 'news' && pubDate ? format(new Date(pubDate), 'MMMM dd, yyyy') : null;

      const categoryTopicsRef: any = getLocalizedField(item?.fields, 'categoryTopics', ctx);
      const categoryTopicsIds =
        categoryTopicsRef?.map((content: any) => {
          return { id: content?.sys.id, preview: !!ctx.preview };
        }) ?? [];
      const categoryTopicsItems: any[] = !!categoryTopicsIds?.length
        ? (await ctx.loaders.entryLoader.loadMany(categoryTopicsIds.slice(0, 1))).filter(Boolean)
        : [];
      const categoryTopics = await Promise.all(
        categoryTopicsItems?.map(async (item) => {
          const catTitle = getLocalizedField(item?.fields, 'title', ctx);
          const catSlug = getLocalizedField(item?.fields, 'slug', ctx);
          const catMediaRef = getLocalizedField(item?.fields, 'media', ctx);
          const catMediaItem =
            catMediaRef?.[0]?.sys?.id &&
            (await ctx.loaders.assetLoader.load({
              id: catMediaRef?.[0]?.sys?.id,
              preview: !!ctx.preview
            }));
          const catMedia = [];
          if (catMediaItem) catMedia.push(catMediaItem);

          const ctaItem = getLocalizedField(item?.fields, 'ctaItem', ctx);

          return createType('category', {
            id: item?.sys?.id,
            title: catTitle,
            slug: catSlug,
            media: catMedia,
            colorScheme: contentType === 'customerStory' ? 'Dark' : 'Light',
            ctaItem
          });
        })
      );

      return createType('card', {
        id: item?.sys?.id,
        variant: cardVariant,
        title,
        eyebrow,
        actions,
        categories: categoryTopics,
        media
      });
    })
  );
  return results;
};

const getGlossaryFilter = async (ref: any, _args: any, ctx: ApolloContext) => {
  const itemsRef = getLocalizedField(ref?.fields, 'items', ctx);
  if (!itemsRef?.length) return null;
  const itemsIds =
    itemsRef?.map((content: any) => {
      return { id: content?.sys.id, preview: !!ctx.preview };
    }) ?? [];
  const items: any[] = (await ctx.loaders.entryLoader.loadMany(itemsIds)).filter(Boolean);
  const cardVariant = 'Glossary Filter';

  const results = await Promise.all(
    items.map(async (item) => {
      const title = getLocalizedField(item?.fields, 'title', ctx);
      const description = getLocalizedField(item?.fields, 'description', ctx);
      const media = [];
      const mediaRef = getLocalizedField(item?.fields, 'media', ctx);
      const featuredMedia =
        mediaRef?.[0]?.sys?.id &&
        (await ctx.loaders.assetLoader.load({
          id: mediaRef?.[0]?.sys?.id,
          preview: !!ctx.preview
        }));
      if (featuredMedia) media.push(featuredMedia);
      const actions = [];
      const link = getLocalizedField(item?.fields, 'link', ctx);
      if (link) actions.push(link);

      const categoriesRef: any = getLocalizedField(item?.fields, 'categories', ctx);
      const categoriesIds =
        categoriesRef?.map((content: any) => {
          return { id: content?.sys.id, preview: !!ctx.preview };
        }) ?? [];
      const types = categoriesRef?.map((content: any) => content?.sys.id);
      const categoriesItems: any[] = !!categoriesIds?.length
        ? (await ctx.loaders.entryLoader.loadMany(categoriesIds.slice(0, 1))).filter(Boolean)
        : [];

      const categories = await Promise.all(
        categoriesItems?.map(async (category) => {
          const catTitle = getLocalizedField(category?.fields, 'title', ctx);
          const catSlug = getLocalizedField(category?.fields, 'slug', ctx);
          const catMedia = [];
          const catMediaRef = getLocalizedField(category?.fields, 'media', ctx);
          const catMediaItem =
            catMediaRef?.[0]?.sys?.id &&
            (await ctx.loaders.assetLoader.load({
              id: catMediaRef?.[0]?.sys?.id,
              preview: !!ctx.preview
            }));
          if (catMediaItem) catMedia.push(catMediaItem);

          const ctaItem = getLocalizedField(category?.fields, 'ctaItem', ctx);

          return createType('category', {
            id: category?.sys?.id,
            title: catTitle,
            slug: catSlug,
            media: catMedia,
            colorScheme: 'Light',
            ctaItem
          });
        })
      );

      return createType('card', {
        id: item?.sys?.id,
        variant: cardVariant,
        title,
        subtitle: description,
        actions,
        categories,
        media,
        filters: {
          types
        }
      });
    })
  );
  return results;
};

const collectionItemsResolver = async (ref: any, args: any, ctx: ApolloContext) => {
  const itemsRef = getLocalizedField(ref?.fields, 'items', ctx);

  if (ref?.sys?.isMock) return itemsRef;

  const variant = getLocalizedField(ref?.fields, 'variant', ctx);

  switch (variant) {
    case 'Customer Logos':
      return getCustomerLogos(ref, args, ctx);
    case 'Resources Filter':
      return getResourcesFilter(ref, args, ctx);
    case 'Integrations Filter':
      return getIntegrationsFilter(ref, args, ctx);
    case 'Resources List':
      return getResourcesList(ref, args, ctx);
    case 'Glossary Filter':
      return getGlossaryFilter(ref, args, ctx);
    default:
      return itemsRef;
  }
};

export default collectionItemsResolver;
