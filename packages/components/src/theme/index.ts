import { responsiveFontSizes, ThemeOptions, createTheme } from '@mui/material/styles';
import Hero from '../components/Hero/Hero.theme';
import Blog from '../components/Blog/Blog.theme';
import Page from '../components/Page/Page.theme';
import Person from '../components/Person/Person.theme';
import Card from '../components/Card/Card.theme';
import Media from '../components/Media/Media.theme';
import Block from '../components/Block/Block.theme';
import Quote from '../components/Quote/Quote.theme';
import GlobalFooter from '../components/GlobalFooter/GlobalFooter.theme';
import FooterNavigationItem from '../components/FooterNavigationItem/FooterNavigationItem.theme';
import FooterNavigationItemGroup from '../components/FooterNavigationItemGroup/FooterNavigationItemGroup.theme';
import Header from '../components/Header/Header.theme';
import HeaderNavLink from '../components/Header/HeaderNavLink/HeaderNavLink.theme';
import HeaderNavGroup from '../components/Header/HeaderNavGroup/HeaderNavGroup.theme';
import HeaderNavLinkNested from '../components/Header/HeaderNavLinkNested/HeaderNavLinkNested.theme';
import Section from '../components/Section/Section.theme';
import Link from '../components/Link/Link.theme';
import Text from '../components/Text/Text.theme';
import ModuleIntegration from '../components/ModuleIntegration/ModuleIntegration.theme';
import Phrases from '../components/Phrases/Phrases.theme';
import Calendly from '../components/Calendly/Calendly.theme';
import NavigationBar from '../components/NavigationBar/NavigationBar.theme';
import NavigationItem from '../components/NavigationItem/NavigationItem.theme';
import Collection from '../components/Collection/Collection.theme';
import merge from 'lodash/merge';
import camelCase from 'lodash/camelCase';

const baseTheme: ThemeOptions = {
  spacing: 8,
  shape: {
    borderRadius: 8
  },
  breakpoints: {
    // Add any custom breakpoints here
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    // Customize add and/or remove as necesary
    body1: {
      fontFamily: 'Poppins',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.625,
      color: '#000000'
    },
    body2: {
      fontFamily: 'Poppins',
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: 1.5,
      color: '#000000'
    },
    h1: {
      fontFamily: 'Poppins',
      fontSize: '3.25rem',
      lineHeight: 1.375,
      fontWeight: 700,
      fontStyle: 'normal',
      color: '#000000'
    },
    h2: {
      fontFamily: 'Poppins',
      fontSize: '2.75rem',
      lineHeight: 1.25,
      fontWeight: 700,
      fontStyle: 'normal',
      color: '#000000'
    },
    h3: {
      fontFamily: 'Poppins',
      fontSize: '2rem',
      lineHeight: 1.375,
      fontWeight: 700,
      fontStyle: 'normal',
      color: '#000000'
    },
    h4: {
      fontFamily: 'Poppins',
      fontSize: '1.5rem',
      lineHeight: 1.5,
      fontWeight: 700,
      fontStyle: 'normal',
      color: '#000000'
    },
    h5: {
      fontFamily: 'Poppins',
      fontSize: '1.25rem',
      lineHeight: 1.2,
      fontWeight: 700,
      fontStyle: 'normal',
      color: '#000000'
    },
    h6: {
      fontFamily: 'Poppins',
      fontSize: '1.125rem',
      lineHeight: 1.3333,
      fontWeight: 700,
      fontStyle: 'normal',
      color: '#000000'
    }
  },
  palette: {
    mode: 'light',
    ...{
      white: {
        main: '#FFF',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      black: {
        main: '#000',
        contrastText: '#FFF'
      }
    },
    primary: {
      main: '#3B00AD',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#EDF0FF',
      contrastText: '#000000'
    },
    background: {
      default: '#FFFFFF'
    },
    text: {
      primary: '#747474',
      secondary: '#E5E5E5',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    error: {
      main: '#ff1744',
      light: 'rgb(255, 69, 105)',
      dark: 'rgb(178, 16, 47)',
      contrastText: '#fff'
    },
    common: {
      black: '#00030B',
      white: '#FFFFFF'
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#fff'
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#fff'
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#fff'
    }
  }
};

const createSchemeTheme = (schemeKey?: string) => {
  const baseSchemeTheme = createTheme(baseTheme);

  const schemeTheme = createTheme(
    merge(
      { scheme: camelCase(schemeKey) },
      baseSchemeTheme,
      ...[
        Header(baseSchemeTheme),
        Blog(baseSchemeTheme),
        Person(baseSchemeTheme),
        Page(baseSchemeTheme),
        Text(baseSchemeTheme),
        Card(baseSchemeTheme),
        GlobalFooter(baseSchemeTheme),
        Block(baseSchemeTheme),
        FooterNavigationItem(baseSchemeTheme),
        FooterNavigationItemGroup(baseSchemeTheme),
        HeaderNavLink(baseSchemeTheme),
        HeaderNavGroup(baseSchemeTheme),
        HeaderNavLinkNested(baseSchemeTheme),
        Quote(baseSchemeTheme),
        Media(baseSchemeTheme),
        Hero(baseSchemeTheme),
        NavigationItem(baseSchemeTheme),
        NavigationBar(baseSchemeTheme),
        ModuleIntegration(baseSchemeTheme),
        Phrases(baseSchemeTheme),
        Calendly(baseSchemeTheme),
        Link(baseSchemeTheme),
        Section(baseSchemeTheme),
        Collection(baseSchemeTheme)
      ],
      {
        createSchemeTheme,
        components: {
          // CollectionAccordionMedia:
          MuiContainer: {
            defaultProps: {
              maxWidth: 'xl'
            },
            styleOverrides: {
              root: {
                [baseSchemeTheme.breakpoints.down('sm')]: {
                  'paddingLeft': baseSchemeTheme.spacing(5),
                  'paddingRight': baseSchemeTheme.spacing(5),
                  '&.MuiContainer-disableGutters': {
                    paddingLeft: 0,
                    paddingRight: 0
                  }
                },

                [baseSchemeTheme.breakpoints.up('sm')]: {
                  paddingLeft: baseSchemeTheme.spacing(10),
                  paddingRight: baseSchemeTheme.spacing(10)
                },

                '&.MuiContainer-disableGutters': {
                  paddingLeft: 0,
                  paddingRight: 0
                }
              }
            }
          }
        }
      }
    )
  );

  return responsiveFontSizes(schemeTheme);
};

const theme = createSchemeTheme();
export default theme;
