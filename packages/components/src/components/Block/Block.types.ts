import { Block_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk/dist';

export enum BlockVariants {
  default = 'default',
  mediaAbove = 'mediaAbove',
  mediaOnRight = 'mediaOnRight',
  mediaOnLeft = 'mediaOnLeft',
  mediaBelow = 'mediaBelow'
}

export interface BlockProps extends Block_BaseFragmentFragment {}

export interface BlockClasses {
  root: string;
  introTextWrapper: string;
  introText: string;
  contentOuterWrapper: string;
  categoriesWrapper: string;
  contentWrapper: string;
  content: string;
  angledArrowIcon: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  mediaWrapper: string;
  mediaItems: string;
  actionsWrapper: string;
  action: string;
}

export declare type BlockClassKey = keyof BlockClasses;
