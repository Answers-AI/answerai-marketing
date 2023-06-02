import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';
import LRText, { RichText } from '@last-rev/component-library/dist/components/Text';

import { TextProps } from './Text.types';

const Text = ({ eyebrow, title, subtitle, className, body, align, ...props }: TextProps & { className: string }) => {
  return (
    <RootWrapper className={className}>
      {/* @ts-ignore: TODO: mismatch of align types */}
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

      {title && (
        // @ts-ignore: TODO: mismatch of align types
        <Title component="h2">{title}</Title>
      )}

      {/* @ts-ignore: TODO: mismatch of align types */}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}

      {body?.json && <LRText __typename="Text" variant={props.variant} id={props.id} body={body as RichText} />}
    </RootWrapper>
  );
};

const shouldForwardProp = (prop: string) =>
  prop !== 'variant' && prop !== 'sidekickLookup' && prop !== 'body' && prop !== 'align' && prop !== 'colorScheme';

const RootWrapper = styled(Box, {
  name: 'Text',
  slot: 'RootWrapper',
  shouldForwardProp,
  overridesResolver: (_, styles) => [styles.rootWrapper]
})(({}) => ({}));

const Eyebrow = styled(Typography, {
  name: 'Text',
  slot: 'Eyebrow',
  overridesResolver: (_, styles) => [styles.eyebrow]
})(({}) => ({}));

const Title = styled(Typography, {
  name: 'Text',
  slot: 'Title',
  overridesResolver: (_, styles) => [styles.title]
})<TypographyProps<React.ElementType> & { align?: string }>(({}) => ({}));

const Subtitle = styled(Typography, {
  name: 'Text',
  slot: 'Subtitle',
  overridesResolver: (_, styles) => [styles.subtitle]
})(({}) => ({}));

export default Text;
