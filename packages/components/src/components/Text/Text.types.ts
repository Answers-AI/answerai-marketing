import { Text_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk';

export interface TextProps extends Text_BaseFragmentFragment {
  eyebrow?: string;
  title?: string;
  subtite?: string;
  embeddedAsset?: string;
  imageCaption?: string;
  variant?: string;
}

export interface TextClasses {
  rootWrapper: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  embeddedAsset: string;
  imageCaption: string;
  variant: string;
}

export declare type TextClassKey = keyof TextClasses;
