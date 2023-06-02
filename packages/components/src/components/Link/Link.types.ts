import { Link_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk';

export interface LinkProps extends Link_BaseFragmentFragment {
  id?: string;
  disabled?: boolean;
  actionType?: string;
}

export interface LinkClasses {
  root?: string;
}

export declare type LinkClassKey = keyof LinkClasses;

export interface LinkComponentNameToClassKey {
  Link: LinkClassKey;
}
