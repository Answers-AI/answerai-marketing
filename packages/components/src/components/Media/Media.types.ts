import { MediaProps as LRMediaProps } from '@last-rev/component-library/dist/components/Media';

import { LinkProps } from '../Link';

export interface MediaProps extends LRMediaProps {
  controls?: boolean;
  link?: LinkProps;
}

export interface MediaClasses {
  root: string;
}

export declare type MediaClassKey = keyof MediaClasses;