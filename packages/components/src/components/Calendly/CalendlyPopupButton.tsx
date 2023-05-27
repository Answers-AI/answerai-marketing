import React, { useRef, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { PopupButton } from 'react-calendly';
import sidekick from '@last-rev/contentful-sidekick-util';
import { CalendlyProps } from './Calendly.types';

const CalendlyPopupButton = ({ sidekickLookup, settings }: CalendlyProps) => {
  const rootRef = useRef(null);
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(rootRef.current);
  }, []);

  return (
    <Root ref={rootRef} {...sidekick(sidekickLookup)}>
      <PopupButton
        className="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root MuiButtonBase-root-MuiButton-root-Link-root"
        url={settings?.url}
        // @ts-ignore-next-line
        rootElement={rootElement}
        text={settings?.ctaText || 'Click here to schedule!'}
      />
    </Root>
  );
};

const Root = styled(Box, {
  name: 'Calendly',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root]
})(() => ({}));

export default CalendlyPopupButton;
