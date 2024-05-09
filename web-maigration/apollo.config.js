require('dotenv').config();

const path = require('path');
const { graphqlEndpoint } = require('@repo/utils');

module.exports = {
  client: {
    service: {
      name: process.env.APOLLO_GRAPH_REF || 'lastrev-next-starter',
      localSchemaFile: path.resolve(__dirname, './apps/graphql-sdk/schema.graphql'),
      url: graphqlEndpoint
    },
    includes: ['./packages/ui/src/components/**/*.graphql', './apps/graphql-sdk/src/**/*.graphql'],
    excludes: ['**/generated/**']
  }
};
