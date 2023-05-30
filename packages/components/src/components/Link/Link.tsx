import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LastRevLink from '@last-rev/component-library/dist/components/Link';
import type { LinkProps as LRLinkProps } from '@last-rev/component-library/dist/components/Link';
export type { LinkClassKey, LinkClasses } from '@last-rev/component-library/dist/components/Link';

import linkActionTypePropsMapper from '../../utils/linkActionTypePropsMapper';

import YoutubeIcon from '../Icons/YoutubeIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import YoutubeIconFooter from '../Icons/YoutubeIconFooter';
import LinkedinIconFooter from '../Icons/LinkedinIconFooter';
import TwitterIconFooter from '../Icons/TwitterIconFooter';
import FacebookIcon from '../Icons/FacebookIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import ChevronIcon from '../Icons/ChevronIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';
import AngledArrowIcon from '../Icons/AngledArrowIcon';

export interface LinkProps extends LRLinkProps {
  __typename: 'Link';
  actionType?: string;
  passHref?: boolean;
}

const CUSTOM_ICONS: { [key: string]: any } = {
  'youtube': YoutubeIcon,
  'linkedin': LinkedinIcon,
  'twitter': TwitterIcon,
  'youtube-footer': YoutubeIconFooter,
  'linkedin-footer': LinkedinIconFooter,
  'twitter-footer': TwitterIconFooter,
  'facebook': FacebookIcon,
  'instagram': InstagramIcon,
  'chevron': ChevronIcon,
  'arrow-right': ArrowRightIcon,
  'angled-arrow': AngledArrowIcon
};

const Link = React.forwardRef<any, LinkProps>(function Link(props, ref) {
  const { icon, variant, ...rest } = props;
  const actionProps = linkActionTypePropsMapper(props?.actionType);
  const linkProps = { ...rest, ...actionProps };

  if (icon && !!CUSTOM_ICONS[icon]) {
    const Icon = CUSTOM_ICONS[icon];

    if (!!rest.text)
      return (
        <LRLink {...linkProps} text={undefined} variant={variant} ref={ref} noLinkStyle passHref>
          {variant !== 'button-cta5' && variant !== 'angled-arrow' && rest.text}
          <Icon fontSize="inherit" />
        </LRLink>
      );

    return (
      <IconButton component={LRLink} ref={ref} {...linkProps} noLinkStyle>
        <Icon />
      </IconButton>
    );
  }

  return <LRLink {...linkProps} icon={icon} variant={variant} ref={ref} />;
});

const LRLink = styled(LastRevLink, {
  shouldForwardProp: (props) => props !== 'colorScheme' && props !== 'passHref'
})<LinkProps>(() => ({}));

export default Link;
