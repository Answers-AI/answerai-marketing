import defaultResolver from './resolvers/defaultResolver';
import hrefResolver from './resolvers/hrefResolver';
import linkIconResolver from './resolvers/linkIconResolver';
import linkIconPositionResolver from './resolvers/linkIconPositionResolver';

export const mappers = {
  Link: {
    Link: {
      href: hrefResolver,
      variant: defaultResolver('variant', {
        mappings: {
          'Button - Text': 'text',
          'Button - Outline': 'button-outlined',
          'Button - Solid': 'button-contained',
          'CTA 1': 'button-cta1',
          'CTA 2': 'button-cta2',
          'CTA 3': 'button-cta3',
          'CTA 4': 'button-cta4',
          'CTA 5': 'button-cta5',
          'CTA Module': 'button-ctaModule'
        }
      }),
      icon: linkIconResolver,
      iconPosition: linkIconPositionResolver,
      target: defaultResolver('target', {
        mappings: {
          'Default': null,
          'New Window': '_blank',
          'Same Window': '_self',
          'Parent Window': '_parent'
        }
      })
    }
  }
};
