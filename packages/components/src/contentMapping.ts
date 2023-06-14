import dynamic from 'next/dynamic';

import Section from './components/Section';
import Collection from './components/Collection';
import NavigationBar from './components/NavigationBar';
import Link from './components/Link';
import NavigationItem from './components/NavigationItem';
import HeaderNavLink from './components/Header/HeaderNavLink';
import HeaderNavGroup from './components/Header/HeaderNavGroup';
import HeaderNavLinkNested from './components/Header/HeaderNavLinkNested';
import FooterNavigationItem from './components/FooterNavigationItem';
import FooterNavigationItemGroup from './components/FooterNavigationItemGroup';
import Hero from './components/Hero';
import Media from './components/Media';
import Text from './components/Text';

const Card = dynamic(() => import('./components/Card'));
const CollectionAccordion = dynamic(() => import('./components/CollectionAccordion'));
const BackToTop = dynamic(() => import('@last-rev/component-library/dist/components/BackToTop'));
const CollectionCarousel = dynamic(() => import('@last-rev/component-library/dist/components/CollectionCarousel'));

// Custom components
const CollectionFiltered = dynamic(() => import('./components/CollectionFiltered'));

// Custom components
const Quote = dynamic(() => import('./components/Quote'));
const Page = dynamic(() => import('./components/Page'));
const Phrases = dynamic(() => import('./components/Phrases'));
const CalendlyInline = dynamic(() => import('./components/Calendly/CalendlyInline'));
const CalendlyPopupWidget = dynamic(() => import('./components/Calendly/CalendlyPopupWidget'));
const CalendlyPopupButton = dynamic(() => import('./components/Calendly/CalendlyPopupButton'));
const ModuleIntegration = dynamic(() => import('./components/ModuleIntegration'));
const Block = dynamic(() => import('./components/Block'));
const Form = dynamic(() => import('./components/Form'));
const Blog = dynamic(() => import('./components/Blog'));
const GlobalFooter = dynamic(() => import('./components/GlobalFooter'));
const Header = dynamic(() => import('./components/Header'));
const Person = dynamic(() => import('./components/Person'));

// ICONS
const AngledArrowIcon = dynamic(() => import('./components/Icons/AngledArrowIcon'));
const ArrowRightIcon = dynamic(() => import('./components/Icons/ArrowRightIcon'));
const CheckMarkIcon = dynamic(() => import('./components/Icons/CheckMarkIcon'));
const ChevronIcon = dynamic(() => import('./components/Icons/ChevronIcon'));
const CloseIcon = dynamic(() => import('./components/Icons/CloseIcon'));
const FacebookIcon = dynamic(() => import('./components/Icons/FacebookIcon'));
const GlobeIcon = dynamic(() => import('./components/Icons/GlobeIcon'));
const HamburgerIcon = dynamic(() => import('./components/Icons/HamburgerIcon'));
const InstagramIcon = dynamic(() => import('./components/Icons/InstagramIcon'));
const LinkedinIcon = dynamic(() => import('./components/Icons/LinkedinIcon'));
const MinusIcon = dynamic(() => import('./components/Icons/MinusIcon'));
const PlusIcon = dynamic(() => import('./components/Icons/PlusIcon'));
const QuoteIcon = dynamic(() => import('./components/Icons/QuoteIcon'));
const TwitterIcon = dynamic(() => import('./components/Icons/TwitterIcon'));
const YoutubeIcon = dynamic(() => import('./components/Icons/YoutubeIcon'));

const contentMapping: {
  [key: string]: any;
} = {
  Page,
  Header,

  Collection,
  'Collection:carousel': CollectionCarousel,
  'Collection:accordion': CollectionAccordion,
  'Collection:filtered': CollectionFiltered,
  'Collection:carousel-large': CollectionCarousel,
  'Collection:carousel-small': CollectionCarousel,
  'Collection:navigation-bar': NavigationBar,
  BackToTop,
  Card,
  Media,
  Link,
  NavigationItem,
  'NavigationItem:headerLink': HeaderNavLink,
  'NavigationItem:headerLinkNested': HeaderNavLinkNested,
  'NavigationItem:headerGroup': HeaderNavGroup,
  'NavigationItem:linkFooter': FooterNavigationItem,
  'NavigationItem:linkBoldedFooter': FooterNavigationItem,
  'NavigationItem:groupFooter': FooterNavigationItemGroup,
  'Icon:angled-arrow': AngledArrowIcon,
  'Icon:arrow': ArrowRightIcon,
  'Icon:check-mark': CheckMarkIcon,
  'Icon:chevron': ChevronIcon,
  'Icon:close': CloseIcon,
  'Icon:facebook': FacebookIcon,
  'Icon:globe': GlobeIcon,
  'Icon:hamburger': HamburgerIcon,
  'Icon:instagram': InstagramIcon,
  'Icon:linkedin': LinkedinIcon,
  'Icon:minus': MinusIcon,
  'Icon:plus': PlusIcon,
  'Icon:quote': QuoteIcon,
  'Icon:twitter': TwitterIcon,
  'Icon:youtube': YoutubeIcon,
  Hero,
  Quote,
  ModuleIntegration,
  'ModuleIntegration:Phrases': Phrases,
  'ModuleIntegration:phrases': Phrases,
  'ModuleIntegration:calendlyInline': CalendlyInline,
  'ModuleIntegration:calendlyPopupWidget': CalendlyPopupWidget,
  'ModuleIntegration:calendlyPopupButton': CalendlyPopupButton,
  'ModuleIntegration:hubspotFormDefault': Form,
  Block,
  GlobalFooter,
  Blog,
  Person,
  Text,
  Section
};

export default contentMapping;
