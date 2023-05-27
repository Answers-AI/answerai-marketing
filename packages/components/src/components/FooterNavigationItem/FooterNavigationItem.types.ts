import { NavigationItem_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk';

export interface FooterNavigationItemProps extends NavigationItem_BaseFragmentFragment {}

export interface FooterNavigationItemClasses {
  root: string;
  tag: string;
}

export declare type FooterNavigationItemClassKey = keyof FooterNavigationItemClasses;
