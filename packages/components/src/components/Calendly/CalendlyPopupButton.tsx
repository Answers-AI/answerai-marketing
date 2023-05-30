import React, { useRef, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { PopupModal } from 'react-calendly';
import sidekick from '@last-rev/contentful-sidekick-util';
import { CalendlyProps } from './Calendly.types';

const CalendlyPopupButton = ({ sidekickLookup, settings }: CalendlyProps) => {
  const rootRef = useRef(null);
  const [rootElement, setRootElement] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setRootElement(rootRef.current);
  }, []);

  return (
    <Root ref={rootRef} {...sidekick(sidekickLookup)}>
      <Box>
        <Button variant="outlined" onClick={() => setIsOpen(true)}>
          {settings?.ctaText || 'Click here to schedule!'}
        </Button>
        <PopupModal
          url={settings?.url}
          pageSettings={settings?.pageSettings}
          utm={settings?.utm}
          prefill={settings?.prefill}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={rootElement!}
        />
      </Box>
    </Root>
  );
};

const Root = styled(Box, {
  name: 'Calendly',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root]
})(() => ({}));

export default CalendlyPopupButton;
