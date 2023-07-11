import { Theme, ThemeOptions, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material/styles';

// https://mui.com/customization/theme-components/#default-props
export const defaultProps: ComponentsProps['Hero'] = {
  contentWidth: 'xl',
  disableGutters: false
};

// https://mui.com/customization/theme-components/#global-style-overrides
export const styleOverrides: ComponentsOverrides<Theme>['Hero'] = {
  root: ({ theme, variant }) => {
    return {
      'header[class*=elevation0] + & ': {
        padding: theme.spacing(10, 0, 5),

        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(20, 0, 10)
        }
      },

      '.MuiGrid-container': {
        alignItems: 'center'
      },

      '.MuiTypography-h2': {
        ...theme.typography.h1,
        lineHeight: '1.25'
      },

      '& [class*=backgroundRoot]': {
        opacity: '.5'
      },

      '& img': {
        borderRadius: variant === 'imageNoBorder' ? 'none' : '50%',
        border: variant === 'imageNoBorder' ? 'none' : '10px solid #00fff2 !important',
        display: 'inline-block',
        overflow: 'hidden'
      }
    };
  }
};

// https://mui.com/customization/theme-components/#adding-new-component-variants
const createVariants = (_theme: Theme): ComponentsVariants['Hero'] => [];

export default (theme: Theme): ThemeOptions => ({
  components: {
    Hero: {
      defaultProps,
      styleOverrides,
      variants: createVariants(theme)
    }
  }
});
