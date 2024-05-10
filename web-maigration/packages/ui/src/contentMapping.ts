import dynamic from 'next/dynamic';

const Block = dynamic(() => import('./components/Block'));

const Hero = dynamic(() => import('./components/Hero'));
const Link = dynamic(() => import('./components/Link'));
const Media = dynamic(() => import('./components/Media'));
const Header = dynamic(() => import('./components/Header'));
const Footer = dynamic(() => import('./components/Footer'));
const Page = dynamic(() => import('./components/Page'));
const TEXT = dynamic(() => import('./components/Text'));
const RichText = dynamic(() => import('./components/RichText'));
const Carousel = dynamic(() => import('./components/Carousel'));
const Collection = dynamic(() => import('./components/Collection'));
const Tabs = dynamic(() => import('./components/Tabs'));
const Card = dynamic(() => import('./components/Card'));
const Accordion = dynamic(() => import('./components/Accordion'));
const Blog = dynamic(() => import('./components/Blog'));
const Person = dynamic(() => import('./components/Person'));
const Quote = dynamic(() => import('./components/Quote'));
const Form = dynamic(() => import('./components/Form'));
const Section = dynamic(() => import('./components/Section'));
const NavigationItem = dynamic(() => import('./components/NavigationItem'));
const HeaderNavLink = dynamic(() => import('./components/Header/HeaderNavLink/HeaderNavLink'));
const HeaderNavGroup = dynamic(() => import('./components/Header/HeaderNavGroup/HeaderNavGroup'));
const HeaderNavLinkNested = dynamic(() => import('./components/Header/HeaderNavLinkNested/HeaderNavLinkNested'));
const FooterNavigationItem = dynamic(() => import('./components/Footer/FooterNavigationItem'));
const FooterNavigationItemGroup = dynamic(() => import('./components/Footer/FooterNavigationItemGroup'));
const SiteMessage = dynamic(() => import('./components/SiteMessage'));
const Breadcrumbs = dynamic(() => import('./components/Breadcrumbs'));

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
