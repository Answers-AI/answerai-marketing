import React from 'react';
import { styled } from '@mui/material/styles';
import LRMedia from '@last-rev/component-library/dist/components/Media';
export type { MediaProps, MediaClassKey, MediaClasses } from '@last-rev/component-library/dist/components/Media';

import { MediaProps } from './Media.types';
import Link from '../Link';

const Media = ({ link, ...props }: MediaProps) => {
  if (link)
    return (
      <Root {...link}>
        <LRMedia {...props} />
      </Root>
    );
  return <LRMedia {...props} />;
};

const Root = styled(Link, {
  name: 'Media',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root]
})(() => ({}));

export default Media;
