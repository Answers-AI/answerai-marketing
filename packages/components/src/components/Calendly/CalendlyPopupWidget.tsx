import React, { useRef, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { PopupWidget } from 'react-calendly';
import sidekick from '@last-rev/contentful-sidekick-util';

import { CalendlyProps } from './Calendly.types';

const CalendlyPopupWidget = ({ sidekickLookup, settings }: CalendlyProps) => {
  const rootRef = useRef(null);
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(rootRef.current);
  }, []);

  return (
    <Root ref={rootRef} {...sidekick(sidekickLookup)}>
      <PopupWidget
        url={settings?.url}
        // @ts-ignore-next-line
        rootElement={rootElement}
        textColor="#ffffff"
        color="#00a2ff"
        text={settings?.ctaText || 'Click here to schedule!'}
      />
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

export default CalendlyPopupWidget;
