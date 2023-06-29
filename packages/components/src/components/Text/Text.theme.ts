import { Theme, ThemeOptions, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material/styles';

// https://mui.com/customization/theme-components/#default-props
export const defaultProps: ComponentsProps['Text'] = {};

// https://mui.com/customization/theme-components/#global-style-overrides
export const styleOverrides: ComponentsOverrides<Theme>['Text'] = {
  // Set some static styles
  rootWrapper: ({ theme }) => ({
    'whiteSpace': 'pre-wrap',

    'ol, ul, li': {
      /* Revert padding reset is what gives the indentation to list */
      padding: 'revert'
    },

    'blockquote': {
      'borderLeft': `${theme.spacing(0.25)} solid ${theme.palette.primary.main}`,
      'margin': theme.spacing(4, 2),
      'paddingLeft': theme.spacing(2),

      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(4)
      },

      '*': {
        ...theme.typography.body1
      }
    }
  }),

  embeddedAsset: () => ({
    // Wraps asset and caption to remove small amount of vertical whitespace
    display: 'flex',
    flexDirection: 'column'
  }),

  imageCaption: ({ theme }) => ({
    margin: theme.spacing(4, 0),
    display: 'inline-block'
  })
};

// https://mui.com/customization/theme-components/#adding-new-component-variants
const createVariants = (_theme: Theme): ComponentsVariants['Text'] => [];

export default (theme: Theme): ThemeOptions => ({
  components: {
    Text: {
      defaultProps,
      styleOverrides,
      variants: createVariants(theme)
    }
  }
});
