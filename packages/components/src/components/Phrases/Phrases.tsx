import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';
import Typed from 'react-typed';
import sidekick from '@last-rev/contentful-sidekick-util';

import { PhrasesProps } from './Phrases.types';

const Phrases = ({ sidekickLookup, settings }: PhrasesProps) => {
  return (
    <Root {...sidekick(sidekickLookup)}>
      <Container>
        <Typed strings={settings?.phrases} typeSpeed={40} backSpeed={1} loop={false} smartBackspace backDelay={2000} />
      </Container>
    </Root>
  );
};

const Root = styled(Box, {
  name: 'Phrases',
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

const Container = styled(MuiContainer, {
  name: 'Phrases',
  slot: 'Container',
  overridesResolver: (_, styles) => [styles.container]
})(() => ({}));

export default Phrases;
