import { NavigationItem_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk';

export interface FooterNavigationItemGroupProps extends NavigationItem_BaseFragmentFragment {}

export interface FooterNavigationItemGroupClasses {
  root: string;
  label: string;
  navigationItems: string;
  navigationItem: string;
}

export declare type FooterNavigationItemGroupClassKey = keyof FooterNavigationItemGroupClasses;
