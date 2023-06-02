import { getSdk } from '@answersai-marketing/graphql-sdk';
import { GraphQLClient } from 'graphql-request';
import graphqlEndpoint from './graphqlEndpoint';

const sdk = getSdk(new GraphQLClient(graphqlEndpoint));

export default sdk;
