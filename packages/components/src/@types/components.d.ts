// import { ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material/styles';

import { ComponentsOverrides, ComponentsProps, ComponentsVariants } from '@mui/material';

declare module '@mui/material/styles' {
  interface Components {
    Page?: {
      defaultProps?: ComponentsProps['Page'];
      styleOverrides?: ComponentsOverrides<Theme>['Page'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Page'];
    };
    Accordion?: {
      defaultProps?: ComponentsProps['Accordion'];
      styleOverrides?: ComponentsOverrides<Theme>['Accordion'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Accordion'];
    };
    Block?: {
      defaultProps?: ComponentsProps['Block'];
      styleOverrides?: ComponentsOverrides<Theme>['Block'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Block'];
    };
    Blog?: {
      defaultProps?: ComponentsProps['Blog'];
      styleOverrides?: ComponentsOverrides<Theme>['Blog'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Blog'];
    };
    Card?: {
      defaultProps?: ComponentsProps['Card'];
      styleOverrides?: ComponentsOverrides<Theme>['Card'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Card'];
    };

    ContentModule?: {
      defaultProps?: ComponentsProps['ContentModule'];
      styleOverrides?: ComponentsOverrides<Theme>['ContentModule'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['ContentModule'];
    };
    ErrorBoundary?: {
      defaultProps?: ComponentsProps['ErrorBoundary'];
      styleOverrides?: ComponentsOverrides<Theme>['ErrorBoundary'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['ErrorBoundary'];
    };
    SEO?: {
      defaultProps?: ComponentsProps['SEO'];
      styleOverrides?: ComponentsOverrides<Theme>['SEO'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['SEO'];
    };

    ContentPreview?: {
      defaultProps?: ComponentsProps['ContentPreview'];
      styleOverrides?: ComponentsOverrides<Theme>['ContentPreview'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['ContentPreview'];
    };
    GlobalFooter?: {
      defaultProps?: ComponentsProps['GlobalFooter'];
      styleOverrides?: ComponentsOverrides<Theme>['GlobalFooter'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['GlobalFooter'];
    };
    NavigationItem?: {
      defaultProps?: ComponentsProps['NavigationItem'];
      styleOverrides?: ComponentsOverrides<Theme>['NavigationItem'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['NavigationItem'];
    };
    Person?: {
      defaultProps?: ComponentsProps['Person'];
      styleOverrides?: ComponentsOverrides<Theme>['Person'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Person'];
    };
    Text?: {
      defaultProps?: ComponentsProps['Text'];
      styleOverrides?: ComponentsOverrides<Theme>['Text'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Text'];
    };
    Image?: {
      defaultProps?: ComponentsProps['Image'];
      styleOverrides?: ComponentsOverrides<Theme>['Image'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Image'];
    };
    Link?: {
      defaultProps?: ComponentsProps['Link'];
      styleOverrides?: ComponentsOverrides<Theme>['Link'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Link'];
    };
    FooterNavigationItem?: {
      defaultProps?: ComponentsProps['FooterNavigationItem'];
      styleOverrides?: ComponentsOverrides<Theme>['FooterNavigationItem'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['FooterNavigationItem'];
    };
    FooterNavigationItemGroup?: {
      defaultProps?: ComponentsProps['FooterNavigationItemGroup'];
      styleOverrides?: ComponentsOverrides<Theme>['FooterNavigationItemGroup'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['FooterNavigationItemGroup'];
    };

    Header?: {
      defaultProps?: ComponentsProps['Header'];
      styleOverrides?: ComponentsOverrides<Theme>['Header'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Header'];
    };
    HeaderNavLink?: {
      defaultProps?: ComponentsProps['HeaderNavLink'];
      styleOverrides?: ComponentsOverrides<Theme>['HeaderNavLink'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['HeaderNavLink'];
    };
    HeaderNavGroup?: {
      defaultProps?: ComponentsProps['HeaderNavGroup'];
      styleOverrides?: ComponentsOverrides<Theme>['HeaderNavGroup'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['HeaderNavGroup'];
    };
    HeaderNavLinkNested?: {
      defaultProps?: ComponentsProps['HeaderNavLinkNested'];
      styleOverrides?: ComponentsOverrides<Theme>['HeaderNavLinkNested'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['HeaderNavLinkNested'];
    };
    Hero?: {
      defaultProps?: ComponentsProps['Hero'];
      styleOverrides?: ComponentsOverrides<Theme>['Hero'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Hero'];
    };

    Media?: {
      defaultProps?: ComponentsProps['Media'];
      styleOverrides?: ComponentsOverrides<Theme>['Media'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Media'];
    };
    Section?: {
      defaultProps?: ComponentsProps['Section'];
      styleOverrides?: ComponentsOverrides<Theme>['Section'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Section'];
    };
    Collection?: {
      defaultProps?: ComponentsProps['Collection'];
      styleOverrides?: ComponentsOverrides<Theme>['Collection'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Collection'];
    };

    CollectionFiltered?: {
      defaultProps?: ComponentsProps['CollectionFiltered'];
      styleOverrides?: ComponentsOverrides<Theme>['CollectionFiltered'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['CollectionFiltered'];
    };
    CollectionAccordion?: {
      defaultProps?: ComponentsProps['CollectionAccordion'];
      styleOverrides?: ComponentsOverrides<Theme>['CollectionAccordion'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['CollectionAccordion'];
    };
    NavigationBar?: {
      defaultProps?: ComponentsProps['NavigationBar'];
      styleOverrides?: ComponentsOverrides<Theme>['NavigationBar'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['NavigationBar'];
    };
    ModuleIntegration?: {
      defaultProps?: ComponentsProps['ModuleIntegration'];
      styleOverrides?: ComponentsOverrides<Theme>['ModuleIntegration'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['ModuleIntegration'];
    };
    Phrases?: {
      defaultProps?: ComponentsProps['Phrases'];
      styleOverrides?: ComponentsOverrides<Theme>['Phrases'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Phrases'];
    };
    Calendly?: {
      defaultProps?: ComponentsProps['Calendly'];
      styleOverrides?: ComponentsOverrides<Theme>['Calendly'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Calendly'];
    };
    // MailchimpForm?: {
    //   defaultProps?: ComponentsProps['MailchimpForm'];
    //   styleOverrides?: ComponentsOverrides<Theme>['MailchimpForm'];
    //   /**
    //    * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
    //    */
    //   variants?: ComponentsVariants['MailchimpForm'];
    // };
    // CollectionCarousel?: {
    //   defaultProps?: ComponentsProps['CollectionCarousel'];
    //   styleOverrides?: ComponentsOverrides<Theme>['CollectionCarousel'];
    //   /**
    //    * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
    //    */
    //   variants?: ComponentsVariants['CollectionCarousel'];
    // };
    // BackToTop?: {
    //   defaultProps?: ComponentsProps['BackToTop'];
    //   styleOverrides?: ComponentsOverrides<Theme>['BackToTop'];
    //   /**
    //    * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
    //    */
    //   variants?: ComponentsVariants['BackToTop'];
    // };
    // FormMarketoEmbed?: {
    //   defaultProps?: ComponentsProps['FormMarketoEmbed'];
    //   styleOverrides?: ComponentsOverrides<Theme>['FormMarketoEmbed'];
    //   /**
    //    * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
    //    */
    //   variants?: ComponentsVariants['FormMarketoEmbed'];
    // };
    Quote?: {
      defaultProps?: ComponentsProps['Quote'];
      styleOverrides?: ComponentsOverrides<Theme>['Quote'];
      /**
       * @deprecated pass a callback to the slot in `styleOverrides` instead. [See example](https://mui.com/customization/theme-components/#overrides-based-on-props)
       */
      variants?: ComponentsVariants['Quote'];
    };
  }
}
