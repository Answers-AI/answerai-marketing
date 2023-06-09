import gql from 'graphql-tag';

import defaultResolver from './resolvers/defaultResolver';
import collectionItemsResolver from './resolvers/collectionItemsResolver';

const COLLECTION_ITEM_TYPES = ['Card', 'Link', 'Media', 'Section', 'NavigationItem', 'Blog'];

export const typeDefs = gql`
  extend type Collection {
    disableGutters: Boolean
    actions: [Link]
    introText: Text
    items: [CollectionItem]
  }

  union CollectionItem = ${COLLECTION_ITEM_TYPES.join('| ')}
`;

export const mappers = {
  Collection: {
    Collection: {
      variant: defaultResolver('variant'),
      items: collectionItemsResolver,
      itemsVariant: defaultResolver('itemsVariant'),
      itemsWidth: defaultResolver('itemsWidth'),
      gutterWidth: defaultResolver('gutterWidth'),
      colorScheme: defaultResolver('colorScheme'),
      disableGutters: defaultResolver('disableGutters', {
        noCamelCase: true
      })
    }
  }
};
