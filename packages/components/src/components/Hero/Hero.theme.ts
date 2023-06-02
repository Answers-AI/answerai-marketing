import { Theme, ThemeOptions, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material/styles';

// https://mui.com/customization/theme-components/#default-props
export const defaultProps: ComponentsProps['Hero'] = {
  contentWidth: 'xl',
  disableGutters: false
};

// https://mui.com/customization/theme-components/#global-style-overrides
export const styleOverrides: ComponentsOverrides<Theme>['Hero'] = {
  root: ({ theme }) => {
    return {
      'header[class*=elevation0] + & ': {
        padding: theme.spacing(10, 0, 5),

        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(25, 0, 15)
        }
      },

      '.MuiTypography-h2': {
        ...theme.typography.h1,
        lineHeight: '1.25'
      },

      '& [class*=backgroundRoot]': {
        opacity: '.5'
      },

      '& img': {
        borderRadius: '50%',
        border: '10px solid #00fff2 !important',
        display: 'inline-block',
        overflow: 'hidden'
      }
    };
  }
};

// https://mui.com/customization/theme-components/#adding-new-component-variants
const createVariants = (_theme: Theme): ComponentsVariants['Hero'] => [
  // Use prop matching to set variant styles
  // {
  //   props: {
  //     variant: 'example'
  //   },
  //   style: {
  //     backgroundColor: theme.palette.primary.main
  //   }
  // }
  // Other props are also valid
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
    Hero: {
      defaultProps,
      styleOverrides,
      variants: createVariants(theme)
    }
  }
});
