import { Theme, ThemeOptions, ComponentsOverrides, ComponentsVariants } from '@mui/material/styles';

// https://mui.com/customization/theme-components/#default-props
export const defaultProps = {};

// https://mui.com/customization/theme-components/#global-style-overrides
export const styleOverrides: ComponentsOverrides<Theme>['Blog'] = {
  root: ({}) => ({}),
  featuredMedia: ({}) => ({}),
  pubDate: ({}) => ({}),
  summary: ({}) => ({}),
  author: ({}) => ({}),
  body: ({}) => ({}),
  blogCategories: ({}) => ({}),
  blogCategory: ({}) => ({}),
  tags: ({}) => ({}),
  tag: ({}) => ({}),
  relatedItems: ({}) => ({})
};

// https://mui.com/customization/theme-components/#adding-new-component-variants
const createVariants = (_theme: Theme): ComponentsVariants['Blog'] => [];

export default (theme: Theme): ThemeOptions => ({
  components: {
    Blog: {
      defaultProps,
      styleOverrides,
      variants: createVariants(theme)
    }
  }
});
