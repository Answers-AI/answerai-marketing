import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';
import sidekick from '@last-rev/contentful-sidekick-util';

import ContentModule from '../ContentModule';
import Link from '../Link';

import { GlobalFooterProps } from './GlobalFooter.types';
import { NavigationItemProps } from '../NavigationItem/NavigationItem.types';
import { MediaProps } from '../Media/Media.types';
import { LinkProps } from '../Link/Link.types';

const GlobalFooter = ({
  logo,
  logoUrl,
  disclaimer,
  socialLinks,
  navigationItems,
  introContents,
  copyrightDisclaimer,
  legalLinks,
  sidekickLookup
}: GlobalFooterProps) => {
  return (
    <Root {...sidekick(sidekickLookup)} component="footer">
      {!!introContents?.length && (
        <IntroContents>
          {introContents?.map((content, index) => (
            // @ts-ignore: TODO: ContentModule doesn't work with custom components (can we extend props?)
            <IntroContent key={`footer-intro-contents-${index}-${content?.id}`} {...(content as any)} />
          ))}
        </IntroContents>
      )}

      <FooterContent>
        <Container>
          <MainSection>
            {!!logo && !!logoUrl && (
              <LogoUrl noLinkStyle {...(logoUrl as LinkProps)}>
                <Logo {...(logo as MediaProps)} />
              </LogoUrl>
            )}
            {!!disclaimer && (
              <Disclaimer {...sidekick(sidekickLookup, 'disclaimer')} __typename="Text" body={disclaimer} />
            )}
            {!!socialLinks?.length && (
              <SocialLinks>
                {socialLinks.map((link) => (
                  <SocialLink key={link?.id} {...sidekick(sidekickLookup, 'sidekickLookup')} {...(link as LinkProps)} />
                ))}
              </SocialLinks>
            )}
          </MainSection>

          {!!navigationItems?.length && (
            <NavigationItems>
              {navigationItems.map((item) => (
                <NavigationItem key={item?.id} {...(item as NavigationItemProps)} variant={`${item?.variant}Footer`} />
              ))}
            </NavigationItems>
          )}
        </Container>

        <Container>
          <LegalSection>
            {!!copyrightDisclaimer && (
              <CopyrightDisclaimer
                {...sidekick(sidekickLookup, 'copyrightDisclaimer')}
                __typename="Text"
                body={copyrightDisclaimer}
              />
            )}
            {!!legalLinks?.length && (
              <LegalLinks>
                {legalLinks.map((link?: LinkProps) => (
                  <LegalLink key={link?.id} {...sidekick(sidekickLookup, 'sidekickLookup')} {...(link as LinkProps)} />
                ))}
              </LegalLinks>
            )}
          </LegalSection>
        </Container>
      </FooterContent>
    </Root>
  );
};

const Root = styled(Box, {
  name: 'GlobalFooter',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root]
})(() => ({}));

const FooterContent = styled(Box, {
  name: 'GlobalFooter',
  slot: 'FooterContent',
  overridesResolver: (_, styles) => [styles.footerContent]
})(() => ({}));

const Container = styled(MuiContainer, {
  name: 'GlobalFooter',
  slot: 'Container',
  overridesResolver: (_, styles) => [styles.container]
})(() => ({}));

const MainSection = styled(Box, {
  name: 'GlobalFooter',
  slot: 'MainSection',
  overridesResolver: (_, styles) => [styles.mainSection]
})(() => ({}));

const Logo = styled(ContentModule, {
  name: 'GlobalFooter',
  slot: 'Logo',
  overridesResolver: (_, styles) => [styles.logo]
})(() => ({}));

const LogoUrl = styled(Link, {
  name: 'GlobalFooter',
  slot: 'LogoUrl',
  shouldForwardProp: (prop) => prop !== 'noLinkStyle',
  overridesResolver: (_, styles) => [styles.logoUrl]
})(() => ({}));

const Disclaimer = styled(ContentModule, {
  name: 'GlobalFooter',
  slot: 'Disclaimer',
  overridesResolver: (_, styles) => [styles.disclaimer]
})(() => ({}));

const SocialLinks = styled(Box, {
  name: 'GlobalFooter',
  slot: 'SocialLinks',
  overridesResolver: (_, styles) => [styles.socialLinks]
})(() => ({}));

const SocialLink = styled(ContentModule, {
  name: 'GlobalFooter',
  slot: 'SocialLink',
  overridesResolver: (_, styles) => [styles.socialLink]
})(() => ({}));

const NavigationItems = styled(Box, {
  name: 'GlobalFooter',
  slot: 'NavigationItems',
  overridesResolver: (_, styles) => [styles.navigationItems]
})(() => ({}));

const NavigationItem = styled(ContentModule, {
  name: 'GlobalFooter',
  slot: 'NavigationItem',
  overridesResolver: (_, styles) => [styles.navigationItem]
})(() => ({}));

const IntroContents = styled(Box, {
  name: 'GlobalFooter',
  slot: 'IntroContents',
  overridesResolver: (_, styles) => [styles.introContents]
})(() => ({}));

const IntroContent = styled(ContentModule, {
  name: 'GlobalFooter',
  slot: 'IntroContent',
  overridesResolver: (_, styles) => [styles.introContent]
})(() => ({}));

const LegalSection = styled(Box, {
  name: 'GlobalFooter',
  slot: 'LegalSection',
  overridesResolver: (_, styles) => [styles.legalSection]
})(() => ({}));

const CopyrightDisclaimer = styled(ContentModule, {
  name: 'GlobalFooter',
  slot: 'CopyrightDisclaimer',
  overridesResolver: (_, styles) => [styles.copyrightDisclaimer]
})(() => ({}));

const LegalLinks = styled(Box, {
  name: 'GlobalFooter',
  slot: 'LegalLinks',
  overridesResolver: (_, styles) => [styles.legalLinks]
})(() => ({}));

const LegalLink = styled(ContentModule, {
  name: 'GlobalFooter',
  slot: 'LegalLink',
  overridesResolver: (_, styles) => [styles.legalLink]
})(() => ({}));

export default GlobalFooter;
