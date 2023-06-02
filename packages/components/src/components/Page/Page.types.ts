import { Page_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk/dist';

export interface PageProps extends Page_BaseFragmentFragment {}

export interface PageClasses {
  root: string;
}

export declare type PageClassKey = keyof PageClasses;
