import { GlobalFooter_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk';

export interface GlobalFooterProps extends GlobalFooter_BaseFragmentFragment {}

export interface GlobalFooterClasses {
  root: string;
  footerContent: string;
  container: string;
  mainSection: string;
  logo: string;
  logoUrl: string;
  disclaimer: string;
  socialLinks: string;
  socialLink: string;
  navigationItems: string;
  navigationItem: string;
  introContents: string;
  introContent: string;
  divider: string;
  legalSection: string;
  copyrightDisclaimer: string;
  legalLinks: string;
  legalLink: string;
}

export declare type GlobalFooterClassKey = keyof GlobalFooterClasses;
