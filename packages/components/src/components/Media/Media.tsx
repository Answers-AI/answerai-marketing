import React from 'react';
import { styled } from '@mui/material/styles';
import LRMedia from '@last-rev/component-library/dist/components/Media';
export type { MediaProps, MediaClassKey, MediaClasses } from '@last-rev/component-library/dist/components/Media';

import { MediaProps } from './Media.types';
import Link from '../Link';
import Box from '@mui/material/Box';

const Media = ({ link, ...props }: MediaProps) => {
  if (link)
    return (
      <Root {...link}>
        <MediaWrap variant={props.variant}>
          <LRMedia {...props} />
        </MediaWrap>
      </Root>
    );
  return (
    <MediaWrap variant={props.variant}>
      <LRMedia {...props} />
    </MediaWrap>
  );
};

const Root = styled(Link, {
  name: 'Media',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root]
})(() => ({}));

const MediaWrap = styled(Box, {
  name: 'Media',
  slot: 'MediaWrap',
  overridesResolver: (_, styles) => [styles.mediaWrap]
})<MediaProps>(() => ({}));
export default Media;
