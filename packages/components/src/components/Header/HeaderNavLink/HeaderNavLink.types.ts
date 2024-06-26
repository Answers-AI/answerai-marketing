import { NavigationItem_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk';

export interface HeaderNavLinkProps extends NavigationItem_BaseFragmentFragment {
  id?: string;
  subNavigation?: Array<HeaderNavLinkProps>;
  sidekickLookup?: any;
  onRequestClose?: any;
  variant?: string;
}

export interface HeaderNavLinkClasses {
  root: string;
  navItemLink: string;
  navItemSubMenu: string;
  navItemSubMenuItem: string;
  navItemSubMenuWrapper: string;
  megaNavContainer: string;
  megaNavContent: string;
  megaNavTitle: string;
  megaNavActions: string;
  megaNavAction: string;
  megaNavMedia: string;
}

export declare type HeaderNavLinkClassKey = keyof HeaderNavLinkClasses;
