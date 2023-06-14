import { Collection_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk';

type CollectionVariants =
  | 'default'
  | 'defaultCircleImage'
  | 'onePerRow'
  | 'twoPerRow'
  | 'twoPerRowOffset'
  | 'threePerRow'
  | 'fourPerRow'
  | 'customerLogos'
  | 'contentGrid'
  | 'pricing'
  | undefined;

export interface CollectionProps extends Collection_BaseFragmentFragment {
  variant?: CollectionVariants;
}

export interface CollectionClasses {
  root: string;
  contentContainer: string;
  introText: string;
  itemsContainer: string;
  item: string;
  actionsContainer: string;
  action: string;
}

export declare type CollectionClassKey = keyof CollectionClasses;
