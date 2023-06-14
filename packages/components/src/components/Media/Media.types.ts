import { MediaProps as LRMediaProps } from '@last-rev/component-library/dist/components/Media';

import { LinkProps } from '../Link';

export interface MediaProps extends LRMediaProps {
  __typename?: any;
  controls?: boolean;
  link?: LinkProps;
}

export interface MediaClasses {
  root: string;
  mediaWrap: string;
}

export declare type MediaClassKey = keyof MediaClasses;
