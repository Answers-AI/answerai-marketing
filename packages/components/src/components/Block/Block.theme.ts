import { Theme, ThemeOptions, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material/styles';

// https://mui.com/customization/theme-components/#default-props
export const defaultProps: ComponentsProps['Block'] = {};

// https://mui.com/customization/theme-components/#global-style-overrides
export const styleOverrides: ComponentsOverrides<Theme>['Block'] = {
  root: () => ({
    position: 'relative',
    overflow: 'hidden'
  }),

  introTextWrapper: ({}) => ({}),

  introText: ({}) => ({}),

  contentOuterWrapper: ({ theme }) => ({
    'display': 'grid',
    'gap': theme.spacing(4, 2),

    'gridTemplateColumns': '1fr 1fr',
    'gridTemplateRows': 'auto',

    'section[id] [class*=Section-gridItem]:not(:only-child) &': {
      padding: 0
    }
  }),

  content: ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start'
    }
  }),

  contentWrapper: () => ({
    gridArea: 'content'
  }),

  eyebrow: ({ theme }) => ({
    textAlign: 'center',
    marginBottom: theme.spacing(1),

    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      marginLeft: theme.spacing(3.25)
    }
  }),

  title: ({ theme }) => ({
    ...theme.typography.h3,
    color: theme.palette.primary.main,
    textAlign: 'center',
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up('md')]: {
      ...theme.typography.h2,
      color: theme.palette.primary.main,
      fontWeight: 900,
      paddingLeft: theme.spacing(3.25),
      textAlign: 'left'
    }
  }),

  subtitle: ({ theme }) => ({
    ...theme.typography.h4,
    color: theme.palette.primary.main,
    textAlign: 'center',

    [theme.breakpoints.up('md')]: {
      ...theme.typography.h3,
      fontWeight: 400,
      paddingLeft: theme.spacing(3.25),
      textAlign: 'left'
    }
  }),

  body: ({ theme }) => ({
    textAlign: 'center',

    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(3.25),
      textAlign: 'left'
    }
  }),

  mediaWrapper: () => ({
    gridArea: 'media'
  }),

  mediaItems: ({}) => ({}),

  actionsWrapper: ({ theme }) => ({
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(3.25),
      justifyContent: 'flex-start'
    }
  }),

  action: () => ({})
};

// https://mui.com/customization/theme-components/#adding-new-component-variants
const createVariants = (theme: Theme): ComponentsVariants['Block'] => [
  {
    props: {
      variant: 'mediaOnRight'
    },
    // @ts-ignore: TODO
    style: ({ eyebrow }) => ({
      '[class*=contentOuterWrapper]': {
        gridTemplateColumns: '1fr',
        gridTemplateAreas: '"media" "content"',

        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: '1fr 1fr',
          gridTemplateAreas: '"content media"'
        }
      }
    })
  },
  {
    props: {
      variant: 'mediaOnLeft'
    },
    style: () => ({
      '[class*=contentOuterWrapper]': {
        gridTemplateColumns: '1fr',
        gridTemplateAreas: '"media" "content"',

        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: '1fr 1fr',
          gridTemplateAreas: '"media content"'
        }
      }
    })
  },
  {
    props: {
      variant: 'mediaBelow'
    },
    style: {
      '[class*=contentOuterWrapper]': {
        gridTemplateColumns: '1fr',
        gridTemplateAreas: '"content" "media"',

        [theme.breakpoints.up('md')]: {
          'gridTemplateColumns': '1fr 10fr 1fr',
          'gridTemplateAreas': '".  content ." ". media ."',

          '& *': {
            alignItems: 'center',
            textAlign: 'center'
          }
        }
      }
    }
  },
  {
    props: {
      variant: 'mediaAbove'
    },
    style: {
      '[class*=contentOuterWrapper]': {
        gridTemplateColumns: '1fr',
        gridTemplateAreas: '"content" "media"',

        [theme.breakpoints.up('md')]: {
          'gridTemplateColumns': '1fr 10fr 1fr',
          'gridTemplateAreas': '".  media ." ". content ."',

          '& *': {
            alignItems: 'center',
            textAlign: 'center'
          }
        }
      }
    }
  }
];

export default (theme: Theme): ThemeOptions => ({
  components: {
    Block: {
      defaultProps,
      styleOverrides,
      variants: createVariants(theme)
    }
  }
});
