import gql from 'graphql-tag';

import defaultResolver from './resolvers/defaultResolver';

export const typeDefs = gql`
  extend type Header {
    logoUrl: Link
    navigationItems: [NavigationItem]
    ctAs: [Link]
    mobileCtAs: [Link]
    supernavLink: Link
  }
`;

export const mappers = {
  Header: {
    Header: {
      colorScheme: defaultResolver('colorScheme')
    }
  }
};
