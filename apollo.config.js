require('dotenv').config();

const path = require('path');
const { graphqlEndpoint } = require('@answerai-marketing/utils');

module.exports = {
  client: {
    service: {
      name: process.env.APOLLO_GRAPH_REF || 'lastrev-next-starter',
      localSchemaFile: path.resolve(__dirname, './packages/graphql-sdk/schema.graphql'),
      url: graphqlEndpoint
    },
    includes: ['./packages/components/**/*.graphql', './packages/graphql-sdk/src/**/*.graphql'],
    excludes: ['**/generated/**']
  }
};
