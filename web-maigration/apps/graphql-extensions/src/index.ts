import merge from 'lodash/merge';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { Source, DocumentNode, GraphQLSchema } from 'graphql';
import { typeDefs as algoliaTypeDefs } from '@last-rev/graphql-algolia-integration';

import {
  Card,
  Collection,
  Hero,
  Link,
  Media,
  NavigationItem,
  Page,
  RichText,
  Section,
  Theme,
  Sidekick
} from '@last-rev/graphql-contentful-extensions';

import * as ModuleIntegration from './ModuleIntegration';
import * as Block from './Block';
import * as CardCustom from './Card';
import * as Header from './Header';
import * as BlogCustom from './Blog';
import * as HeroCustom from './Hero';
import * as GlobalFooter from './GlobalFooter';
import * as Person from './Person';
import * as LinkCustom from './Link';
import * as PageCustom from './Page';
import * as MediaCustom from './Media';
import * as NavigationItemCustom from './NavigationItem';
import * as CollectionCustom from './Collection';
import * as Text from './Text';
import * as SectionCustom from './Section';
import * as PricingPlan from './PricingPlan';

// Uncomment if using Algolia, else delete the related file
// import * as Algolia from './Algolia';

export type GraphQlExtension = {
  typeDefs?: string | DocumentNode | Source | GraphQLSchema;
  resolvers?: {};
  mappers?: {};
  typeMappings?: {};
  pathsConfigs?: {};
};

const extensions: GraphQlExtension[] = [
  { typeDefs: algoliaTypeDefs },
  Page,
  // Algolia,
  Block,
  Card,
  CardCustom,
  Collection,
  CollectionCustom,
  GlobalFooter,
  Header,
  Hero,
  HeroCustom,
  Link,
  LinkCustom,
  Media,
  MediaCustom,
  ModuleIntegration,
  NavigationItem,
  NavigationItemCustom,
  RichText,
  Section,
  Theme,
  Person,
  BlogCustom,
  PageCustom,
  PricingPlan,
  SectionCustom,
  Text,
  Sidekick
];

export const typeDefs = mergeTypeDefs(extensions.map((e) => e.typeDefs).filter((t) => !!t) as any[]);

export const resolvers = mergeResolvers(extensions.map((e) => e.resolvers).filter((t) => !!t) as any[]) as Record<
  string,
  any
>;

export const mappers = merge({}, ...(extensions.map((e) => e.mappers).filter((t) => !!t) as any[]));

export const typeMappings = merge({}, ...(extensions.map((e) => e.typeMappings).filter((t) => !!t) as any[]));

export const pathsConfigs = merge({}, ...(extensions.map((e) => e.pathsConfigs).filter((t) => !!t) as any[]));
