import { Theme, ThemeOptions, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material/styles';

// https://mui.com/customization/theme-components/#default-props
export const defaultProps: ComponentsProps['Media'] = {
  nextImageOptimization: true,
  disableInlineSVG: false,
  priority: false,
  // All images are shown close to full bleed size
  sizes: '100vw'
};

// https://mui.com/customization/theme-components/#global-style-overrides
export const styleOverrides: ComponentsOverrides<Theme>['Media'] = {
  // Set some static styles
  root: () => ({
    // img default display: inline introduces a line-height space at the bottom
    display: 'block',
    maxWidth: `100%`,
    margin: 'auto',
    height: 'auto'
  }),

  mediaWrap: ({ variant }) => {
    if (variant === 'embed') {
      return {
        'padding': '56.25% 0 0 0',
        'position': 'relative',

        '& iframe': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }
      };
    }
    return {};
  }

  // Override a style that is defined in the theme
  // root: {
  //   backgroundColor: 'red'
  // }
  //
  // Use the ownerState to set dynamic styles
  // root: ({ ownerState, theme }) => {
  //   return {
  //     backgroundColor: ownerState.variant === 'example' ? 'red' : theme.palette.background.paper
  //   };
  // }
};

// https://mui.com/customization/theme-components/#adding-new-component-variants
const createVariants = (_theme: Theme): ComponentsVariants['Media'] => [
  // Use prop matching to set variant styles
  // {
  //   props: {
  //     backgroundColor: 'primary.main',
  //   },
  //   style: {
  //     color: theme.palette.primary.contrastText
  //   }
  // }
];

export default (theme: Theme): ThemeOptions => ({
  components: {
    Media: {
      defaultProps,
      styleOverrides,
      variants: createVariants(theme)
    }
  }
});
