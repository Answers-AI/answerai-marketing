import { Blog_BaseFragmentFragment } from '@answersai-marketing/graphql-sdk/dist';

export interface BlogProps extends Blog_BaseFragmentFragment {}

export interface BlogClasses {
  root: string;
  featuredMedia: string;
  pubDate: string;
  title: string;
  summary: string;
  author: string;
  body: string;
  blogCategories: string;
  blogCategory: string;
  tags: string;
  tag: string;
  relatedItems: string;
}

export declare type BlogClassKey = keyof BlogClasses;
