import { Theme, ThemeOptions, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material/styles';

// https://mui.com/customization/theme-components/#default-props
export const defaultProps: ComponentsProps['NavigationBar'] = {};

// https://mui.com/customization/theme-components/#global-style-overrides
export const styleOverrides: ComponentsOverrides<Theme>['NavigationBar'] = {
  root: {
    '& .MuiLink-root': {
      'textDecoration': 'none',
      '&.MuiLink-selected': { fontWeight: 'bold' }
    }
  }
};

// https://mui.com/customization/theme-components/#adding-new-component-variants
const createVariants = (_theme: Theme): ComponentsVariants['NavigationBar'] => [
  {
    props: {
      variant: 'default'
    },
    style: () => ({
      backgroundColor: 'transparent'
    })
  }
];

export default (theme: Theme): ThemeOptions => ({
  components: {
    NavigationBar: {
      defaultProps,
      styleOverrides,
      variants: createVariants(theme)
    }
  }
});
