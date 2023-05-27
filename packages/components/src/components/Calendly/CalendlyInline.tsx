import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { InlineWidget } from 'react-calendly';
import sidekick from '@last-rev/contentful-sidekick-util';

import { CalendlyProps } from './Calendly.types';

const Calendly = ({ sidekickLookup, settings }: CalendlyProps) => {
  return (
    <Root {...sidekick(sidekickLookup)}>
      <InlineWidget url={settings?.url} />
    </Root>
  );
};

const Root = styled(Box, {
  name: 'Calendly',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root]
})(({ theme }) => ({
  padding: theme.spacing(4, 2, 8, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 5, 8, 5)
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(4, 3, 9, 3)
  }
}));

export default Calendly;
