import { GraphQLClient } from 'graphql-request';

const url = process.env.GRAPHQL_URL;
export const graphQLClient = new GraphQLClient(url);
