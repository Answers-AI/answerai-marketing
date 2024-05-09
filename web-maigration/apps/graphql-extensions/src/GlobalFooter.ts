import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type GlobalFooter {
    introContents: [Content]
    navigationItems: [NavigationItem]
    socialLinks: [Link]
    disclaimer: RichText
    logo: Media
    logoUrl: Link
    disclaimer: RichText
    socialLinks: [Link]
    navigationItems: [NavigationItem]
    introContents: [Content]
    copyrightDisclaimer: RichText
    legalLinks: [Link]
    localeLinks: [Link]
  }
`;
