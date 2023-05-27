import React from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography, { TypographyProps } from '@mui/material/Typography';
import MuiAvatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import sidekick from '@last-rev/contentful-sidekick-util';

import ContentModule from '../ContentModule';

import { BlogProps } from './Blog.types';
import { MediaProps } from '../Media/Media.types';
import { LinkProps } from '../Link';
import TwitterIcon from '../Icons/TwitterIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';
import EmailIcon from '../Icons/EmailIcon';
import CopyLinkIcon from '../Icons/CopyLinkIcon';

const Blog = ({
  header,
  footer,
  featuredMedia,
  pubDate,
  title,
  body,
  author,
  relatedItems,
  breadcrumbs,
  sidekickLookup,
  summary,
  contents
}: BlogProps) => {
  const { asPath } = useRouter();
  const [shareUrl, setShareUrl] = React.useState('');
  const encodedShareUrl = encodeURIComponent(shareUrl);

  React.useEffect(() => {
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
    setShareUrl(`${origin}${asPath}`);
  }, [asPath]);

  return (
    <>
      {header ? <ContentModule {...(header as any)} /> : null}
      <Root component="main" {...sidekick(sidekickLookup)}>
        <ContentContainer>
          {/* TODO: Move Breadcrumb to its own component */}
          {!!breadcrumbs?.length && (
            <Breadcrumb>
              {breadcrumbs.map((breadcrumb) => (
                <BreadcrumbItem key={breadcrumb?.id} {...breadcrumb} />
              ))}
            </Breadcrumb>
          )}

          {!!title && <Title component="h1">{title}</Title>}

          <Stats>
            {!!author && (
              <Author>
                {!!author.image && (
                  <Avatar>
                    <AvatarImage {...author.image} />
                  </Avatar>
                )}

                {!!author.name && (
                  <AuthorName>
                    Author: <span>{author.name}</span>
                  </AuthorName>
                )}
              </Author>
            )}

            {!!pubDate && <PubDate variant="body1">{pubDate}</PubDate>}
          </Stats>

          {!!featuredMedia && (
            <FeaturedMedia {...sidekick(sidekickLookup, 'featuredMedia')} {...(featuredMedia as MediaProps)} />
          )}

          <ShareLinksWrapper>
            <ShareLinksLabel variant="body1">Share</ShareLinksLabel>

            <ShareLinks>
              <ShareLink href={`http://www.twitter.com/share?url=${encodedShareUrl}`} target="_blank">
                <TwitterIcon />
                <Typography>Twitter</Typography>
              </ShareLink>
              <ShareLink href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`} target="_blank">
                <FacebookIcon />
                <Typography>Facebook</Typography>
              </ShareLink>
              <ShareLink
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`}
                target="_blank">
                <LinkedinIcon />
                <Typography>Linkedin</Typography>
              </ShareLink>
              <ShareLink href={`mailto:?to=&body=${encodedShareUrl}`}>
                <EmailIcon />
                <Typography>Email</Typography>
              </ShareLink>
              <ShareLink
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                }}>
                <CopyLinkIcon />
                <Typography>Copy Link</Typography>
              </ShareLink>
            </ShareLinks>
          </ShareLinksWrapper>

          {(!!body || !!summary) && (
            <BodyWrap>
              {!!summary && <Summary variant="body1">{summary}</Summary>}
              {!!body && (
                <Body {...sidekick(sidekickLookup, 'body')} __typename="Text" body={body} variant="detailPageBody" />
              )}
            </BodyWrap>
          )}

          {!!relatedItems?.length && (
            <RelatedItemsWrapper>
              <ResourcesLabel variant="body2">Related Items</ResourcesLabel>
              <RelatedItems>
                {relatedItems.map((item) => (
                  <RelatedItem key={item?.id} {...item} />
                ))}
              </RelatedItems>
            </RelatedItemsWrapper>
          )}

          {!!author && (
            <AuthorContainer>
              {(!!author.image || !!author.name) && (
                <Author>
                  {!!author.image && (
                    <Avatar size="large">
                      <AvatarImage {...author.image} />
                    </Avatar>
                  )}
                  {/* TODO: The variant for this text does not exist on Figma */}
                  {!!author.name && <AuthorName>{author.name}</AuthorName>}
                </Author>
              )}

              {!!author.body && <AuthorSummary>{author.body}</AuthorSummary>}

              {!!author.socialLinks?.length && (
                <AuthorSocialLinks>
                  {author.socialLinks.map((link) => (
                    <AuthorSocialLink {...(link as LinkProps)} />
                  ))}
                </AuthorSocialLinks>
              )}
            </AuthorContainer>
          )}
        </ContentContainer>
        {!!contents?.length && (
          <ContentContainer>
            <Content>
              {contents?.map((content: any) => (
                <ContentModule key={content?.id} {...content} />
              ))}
            </Content>
          </ContentContainer>
        )}
      </Root>
      {footer ? <ContentModule {...(footer as any)} /> : null}
    </>
  );
};

const Root = styled(Box, {
  name: 'Blog',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root]
})(({ theme }) => ({
  padding: theme.spacing(4, 2, 5.75, 2),
  letterSpacing: 'initial',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 5, 11, 5)
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(4, 3, 9, 3)
  }
}));

const ContentContainer = styled(Container, {
  name: 'Blog',
  slot: 'ContentContainer',
  overridesResolver: (_, styles) => [styles.contentContainer]
})<{ variant?: string }>(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  gap: theme.spacing(4, 2),

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(6,1fr)',
    gap: theme.spacing(4, 3)
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(12,1fr)',
    gap: theme.spacing(8, 3)
  }
}));

const Breadcrumb = styled(Box, {
  name: 'Blog',
  slot: 'Breadcrumb',
  overridesResolver: (_, styles) => [styles.breadcrumb]
})(({}) => ({
  'gridColumn': '1 / -1',
  'gridRow': '1',
  'alignItems': 'center',
  'maxWidth': '100%',
  'overflow': 'hidden',
  'overflowWrap': 'break-word',
  'textOverflow': 'ellipsis',
  'display': '-webkit-box',
  'hyphens': 'auto',
  '-webkit-line-clamp': '1',
  '-webkit-box-orient': 'vertical'
}));

const BreadcrumbItem = styled(ContentModule, {
  name: 'Blog',
  slot: 'BreadcrumbItem',
  overridesResolver: (_, styles) => [styles.breadcrumbItem]
})(({ theme }) => ({
  textDecoration: 'none',
  borderLeft: `2px solid ${theme.palette.primary.main}`,
  paddingLeft: theme.spacing(0.5),
  color: theme.palette.primary.main,
  ...theme.typography.body2,
  marginRight: theme.spacing(1)
}));

const Title = styled(Typography, {
  name: 'Blog',
  slot: 'Title',
  overridesResolver: (_, styles) => [styles.title]
})<TypographyProps<React.ElementType>>(({ theme }) => ({
  ...theme.typography.h5,
  gridColumn: '1 / -1',
  gridRow: '3',

  [theme.breakpoints.up('md')]: {
    ...theme.typography.h3,
    gridRow: '2'
  },
  [theme.breakpoints.up('lg')]: {
    ...theme.typography.h1
  }
}));

const Summary = styled(Typography, {
  name: 'Blog',
  slot: 'Summary',
  overridesResolver: (_, styles) => [styles.summary]
})<TypographyProps<React.ElementType>>(({ theme }) => ({
  marginBottom: theme.spacing(4),
  display: 'inline-block'
}));

const Stats = styled(Box, {
  name: 'Blog',
  slot: 'Stats',
  overridesResolver: (_, styles) => [styles.stats]
})(({ theme }) => ({
  gridColumn: '1 / -1',
  gridRow: '4',
  display: 'flex',
  alignItems: 'flex-end',
  gap: theme.spacing(6),

  [theme.breakpoints.up('md')]: {
    gridRow: '3'
  },

  [theme.breakpoints.up('lg')]: {
    gridColumn: '1 / span 8'
  }
}));

const PubDate = styled(Typography, {
  name: 'Blog',
  slot: 'PubDate',
  overridesResolver: (_, styles) => [styles.pubDate]
})<TypographyProps<React.ElementType>>(({ theme }) => ({
  paddingBottom: theme.spacing(1.5),
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'block'
  }
}));

const Author = styled(Box, {
  name: 'Blog',
  slot: 'Author',
  overridesResolver: (_, styles) => [styles.author]
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: theme.spacing(1.5)
}));

const Avatar = styled(MuiAvatar, {
  name: 'Blog',
  slot: 'Avatar',
  overridesResolver: (_, styles) => [styles.avatar]
})<{ size?: string }>(({ theme, size }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  aspectRatio: '1/1',

  ...(size === 'large' && {
    width: theme.spacing(12),
    height: theme.spacing(12)
  })
}));

const AvatarImage = styled(ContentModule, {
  name: 'Blog',
  slot: 'AvatarImage',
  overridesResolver: (_, styles) => [styles.avatarImage]
})(() => ({
  objectFit: 'cover',
  aspectRatio: 'inherit'
}));

const AuthorName = styled(Typography, {
  name: 'Blog',
  slot: 'AuthorName',
  overridesResolver: (_, styles) => [styles.authorName]
})<TypographyProps<React.ElementType>>(({ theme }) => ({
  'paddingBottom': theme.spacing(1.5),

  '& span': {
    ...theme.typography.body1,
    fontWeight: 700
  }
}));

const FeaturedMedia = styled(ContentModule, {
  name: 'Blog',
  slot: 'FeaturedMedia',
  overridesResolver: (_, styles) => [styles.featuredMedia]
})(({ theme }) => ({
  gridColumn: '1 / span 2',
  gridRow: '2',
  width: '100%',
  margin: 0,
  [theme.breakpoints.up('md')]: {
    gridRow: '4',
    gridColumn: '1 / span 6'
  },
  [theme.breakpoints.up('lg')]: {
    gridColumn: '1 / span 8'
  }
}));

const ShareLinksWrapper = styled(Box, {
  name: 'Blog',
  slot: 'ShareLinksWrapper',
  overridesResolver: (_, styles) => [styles.shareLinksWrapper]
})(({ theme }) => ({
  gridColumn: '1 / span 2',
  gridRow: '5',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  [theme.breakpoints.up('md')]: {
    gridColumn: '1 / span 6',
    gap: theme.spacing(2)
  },
  [theme.breakpoints.up('lg')]: {
    gridColumn: '1 / span 2'
  }
}));

const ShareLinksLabel = styled(Typography, {
  name: 'Blog',
  slot: 'ShareLinksLabel',
  overridesResolver: (_, styles) => [styles.shareLinksLabel]
})<TypographyProps<React.ElementType>>(() => ({
  fontWeight: 700
}));

const ShareLinks = styled(Box, {
  name: 'Blog',
  slot: 'ShareLinks',
  overridesResolver: (_, styles) => [styles.shareLinks]
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  justifyContent: 'space-between',

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'column'
  }
}));

const ShareLink = styled((props) => <ButtonBase {...props} disableRipple disableTouchRipple />, {
  name: 'Blog',
  slot: 'ShareLink',
  overridesResolver: (_, styles) => [styles.shareLink]
})<{ href?: string; target?: string; onClick?: any }>(({ theme }) => ({
  'gap': theme.spacing(2),

  '& svg': {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },

  '& .MuiTypography-root': {
    display: 'none'
  },

  [theme.breakpoints.up('md')]: {
    'gap': theme.spacing(1),
    '& .MuiTypography-root': {
      display: 'block'
    }
  }
}));

const BodyWrap = styled(Box, {
  name: 'Blog',
  slot: 'BodyWrap',
  overridesResolver: (_, styles) => [styles.bodyWrap]
})(({ theme }) => ({
  gridColumn: '1 / span 2',
  gridRow: '6',

  [theme.breakpoints.up('md')]: {
    gridColumn: '1 / span 6'
  },

  [theme.breakpoints.up('lg')]: {
    gridRow: '5',
    gridColumn: '3 / span 6'
  }
}));

const Body = styled(ContentModule, {
  name: 'Blog',
  slot: 'Body',
  overridesResolver: (_, styles) => [styles.body]
})(() => ({}));

const Newsletter = styled(Box, {
  name: 'Blog',
  slot: 'Newsletter',
  overridesResolver: (_, styles) => [styles.newsletter]
})(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    gridRow: '4',
    gridColumn: '10 / span 3',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    // TODO: Figma has value D9D9D9, which is not defined in the theme colors
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.spacing(1)
  }
}));

const NewsletterTitle = styled(Typography, {
  name: 'Blog',
  slot: 'NewsletterTitle',
  overridesResolver: (_, styles) => [styles.newsletterTitle]
})<TypographyProps<React.ElementType>>(() => ({}));

const NewsletterSubtitle = styled(Typography, {
  name: 'Blog',
  slot: 'NewsletterSubtitle',
  overridesResolver: (_, styles) => [styles.newsletterSubtitle]
})<TypographyProps<React.ElementType>>(() => ({}));

const NewsletterForm = styled(ContentModule, {
  name: 'Blog',
  slot: 'NewsletterForm',
  overridesResolver: (_, styles) => [styles.newsletterForm]
})(() => ({}));

const NewsletterBlock = styled(ContentModule, {
  name: 'Blog',
  slot: 'NewsletterBlock',
  overridesResolver: (_, styles) => [styles.newsletterBlock]
})(() => ({}));

const RelatedItemsWrapper = styled(Box, {
  name: 'Blog',
  slot: 'RelatedItemsWrapper',
  overridesResolver: (_, styles) => [styles.relatedItemsWrapper]
})(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('lg')]: {
    gridRow: '5',
    gridColumn: '10 / span 3',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2)
  }
}));

const ResourcesLabel = styled(Typography, {
  name: 'Blog',
  slot: 'ResourcesLabel',
  overridesResolver: (_, styles) => [styles.resourcesLabel]
})<TypographyProps<React.ElementType>>(() => ({
  fontWeight: 700
}));

const RelatedItems = styled(Box, {
  name: 'Blog',
  slot: 'RelatedItems',
  overridesResolver: (_, styles) => [styles.relatedItems]
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

const RelatedItem = styled(ContentModule, {
  name: 'Blog',
  slot: 'RelatedItem',
  overridesResolver: (_, styles) => [styles.relatedItem]
})(() => ({}));

const AuthorContainer = styled(Box, {
  name: 'Blog',
  slot: 'AuthorContainer',
  overridesResolver: (_, styles) => [styles.authorContainer]
})(({ theme }) => ({
  gridRow: '7',
  gridColumn: '1 / -1',
  borderTop: `1px solid ${theme.palette.primary.main}`,
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  padding: theme.spacing(4, 0),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    '[class*=Blog-author]': {
      alignItems: 'flex-start',
      flexDirection: 'column'
    }
  },

  [theme.breakpoints.up('lg')]: {
    gridRow: '6',
    gridColumn: '3 / span 6'
  }
}));

const AuthorSummary = styled(Typography, {
  name: 'Blog',
  slot: 'AuthorSummary',
  overridesResolver: (_, styles) => [styles.authorSummary]
})<TypographyProps<React.ElementType>>(() => ({}));

const AuthorSocialLinks = styled(Box, {
  name: 'Blog',
  slot: 'AuthorSocialLinks',
  overridesResolver: (_, styles) => [styles.authorSocialLinks]
})(({ theme }) => ({
  'display': 'flex',
  'gap': theme.spacing(3),

  '.MuiButtonBase-root': {
    padding: 0
  },

  'svg': {
    width: theme.spacing(5),
    height: theme.spacing(5)
  }
}));

const AuthorSocialLink = styled(ContentModule, {
  name: 'Blog',
  slot: 'AuthorSocialLink',
  overridesResolver: (_, styles) => [styles.AuthorSocialLink]
})(() => ({}));

const Content = styled(Box, {
  name: 'Blog',
  slot: 'Content',
  overridesResolver: (_, styles) => [styles.content]
})(({ theme }) => ({
  gridColumn: '1 / -1',
  marginTop: theme.spacing(4)
}));

export default Blog;
