import { getSdk } from '@repo/graphql-sdk/src/index';
import { GraphQLClient } from 'graphql-request';
import graphqlEndpoint from './graphqlEndpoint';

const sdk = getSdk(new GraphQLClient(graphqlEndpoint));

export default sdk;
