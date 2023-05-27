import { AccordionProps } from '../components/Accordion';
import { BlockProps } from '../components/Block';
import { BlogProps } from '../components/Blog';
import { CardProps } from '../components/Card';
import { ContentModuleProps } from '../components/ContentModule';
import { ErrorBoundaryProps } from '../components/ErrorBoundary';
import { SEOProps } from '../components/SEO';
import { ContentPreviewProps } from '../components/ContentPreview';
import { NavigationItemProps } from '../components/NavigationItem';
import { TextProps } from '../components/Text';
import { ImageProps } from '../components/Image';
import { LinkProps } from '../components/Link';
import { GlobalFooterProps } from '../components/GlobalFooter';
import { FooterNavigationItemProps } from '../components/FooterNavigationItem';
import { FooterNavigationItemGroupProps } from '../components/FooterNavigationItemGroup';
import { HeaderProps } from '../components/Header';
import { HeaderNavLinkProps } from '../components/Header/HeaderNavLink';
import { HeaderNavGroupProps } from '../components/Header/HeaderNavGroup';
import { HeaderNavLinkNestedProps } from '../components/Header/HeaderNavLinkNested';
import { HeroProps } from '../components/Hero';
import { MediaProps } from '../components/Media';
import { ModuleIntegrationProps } from '../components/ModuleIntegration';
import { PersonProps } from '../components/Person';
import { PhrasesProps } from '../components/Phrases';
import { CalendlyProps } from '../components/Calendly';
import { SectionProps } from '../components/Section';
import { CollectionProps } from '../components/Collection';
import { CollectionFilteredProps } from '../components/CollectionFiltered';
import { CollectionAccordionProps } from '../components/CollectionAccordion';
import { NavigationBarProps } from '../components/NavigationBar';
import { QuoteProps } from '../components/Quote';
import { PageProps } from '../components/Page';

declare module '@mui/material/styles' {
  export interface ComponentsPropsList {
    Accordion: AccordionProps;
    Block: BlockProps;
    Blog: BlogProps;
    Card: CardProps;
    ContentModule: ContentModuleProps;
    ErrorBoundary: ErrorBoundaryProps;
    SEO: SEOProps;
    ContentPreview: ContentPreviewProps;
    NavigationItem: NavigationItemProps;
    Text: TextProps;
    Image: ImageProps;
    Link: LinkProps;
    GlobalFooter: GlobalFooterProps;
    FooterNavigationItem: FooterNavigationItemProps;
    FooterNavigationItemGroup: FooterNavigationItemGroupProps;
    Header: HeaderProps;
    HeaderNavLink: HeaderNavLinkProps;
    HeaderNavGroup: HeaderNavGroupProps;
    HeaderNavLinkNested: HeaderNavLinkNestedProps;
    Hero: HeroProps;
    Media: MediaProps;
    ModuleIntegration: ModuleIntegrationProps;
    Person: PersonProps;
    Phrases: PhrasesProps;
    Calendly: CalendlyProps;
    Section: SectionProps;
    Collection: CollectionProps;
    CollectionFiltered: CollectionFilteredProps;
    CollectionAccordion: CollectionAccordionProps;
    NavigationBar: NavigationBarProps;
    Page: PageProps;
    // MailchimpForm: MailchimpFormProps;
    // CollectionCarousel: CollectionCarouselProps;
    // BackToTop: BackToTopProps;
    // FormMarketoEmbed: FormMarketoEmbedProps;

    // Custom components
    Quote: QuoteProps;
  }
}
