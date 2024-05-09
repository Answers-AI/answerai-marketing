import Block from './components/Block/index';
import Hero from './components/Hero';
import Link from './components/Link';
import Media from './components/Media';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';
import TEXT from './components/Text';
import RichText from './components/RichText';
import Carousel from './components/Carousel';
import Collection from './components/Collection';
import Tabs from './components/Tabs';
import Card from './components/Card';
import Accordion from './components/Accordion';
import Blog from './components/Blog';
import Person from './components/Person';
import Quote from './components/Quote';
import Form from './components/Form';
import Section from './components/Section';
import NavigationItem from './components/NavigationItem';
import HeaderNavLink from './components/Header/HeaderNavLink/HeaderNavLink';
import HeaderNavGroup from './components/Header/HeaderNavGroup/HeaderNavGroup';
import HeaderNavLinkNested from './components/Header/HeaderNavLinkNested/HeaderNavLinkNested';
import FooterNavigationItem from './components/Footer/FooterNavigationItem';
import FooterNavigationItemGroup from './components/Footer/FooterNavigationItemGroup';
import SiteMessage from './components/SiteMessage';
import Breadcrumbs from './components/Breadcrumbs';

export const contentMapping: {
  [key: string]: any;
} = {
  Block,
  Hero,
  Link,
  Media,
  Header,
  Footer,
  Page,
  Text: TEXT,
  RichText,
  Carousel,
  Collection,
  'Collection:.*Carousel': Carousel,
  'CollectionExpandable:Tabs': Tabs,
  'CollectionExpandable:Accordion': Accordion,
  'CollectionExpandable': Tabs,
  Card,
  Person,
  Blog,
  Quote,
  Accordion,
  Tabs,
  Section,
  FooterNavigationItem,
  FooterNavigationItemGroup,
  'ElementForm': Form,
  NavigationItem,
  'NavigationItem:link': HeaderNavLink,
  'NavigationItem:linkNested': HeaderNavLinkNested,
  'NavigationItem:group': HeaderNavGroup,
  'NavigationItem:linkFooter': FooterNavigationItem,
  'NavigationItem:linkBoldedFooter': FooterNavigationItem,
  'NavigationItem:groupFooter': FooterNavigationItemGroup,
  SiteMessage,
  Breadcrumbs
};

export default contentMapping;
