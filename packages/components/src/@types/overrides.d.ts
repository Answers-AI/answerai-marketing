import { AccordionClassKey } from '../components/Accordion';
import { BlockClassKey } from '../components/Block';
import { BlogClassKey } from '../components/Blog';
import { CardClassKey } from '../components/Card';
import { ContentModuleClassKey } from '../components/ContentModule';
import { ErrorBoundaryClassKey } from '../components/ErrorBoundary';
import { SEOClassKey } from '../components/SEO';
import { ContentPreviewClassKey } from '../components/ContentPreview';
import { CollectionClassKey } from '../components/Collection';
import { CollectionFilteredClassKey } from '../components/CollectionFiltered';
import { CollectionAccordionClassKey } from '../components/CollectionAccordion';
import { NavigationItemClassKey } from '../components/NavigationItem';
import { TextClassKey } from '../components/Text';
import { ImageClassKey } from '../components/Image';
import { LinkClassKey } from '../components/Link';
import { GlobalFooterClassKey } from '../components/GlobalFooter';
import { FooterNavigationItemClassKey } from '../components/FooterNavigationItem';
import { FooterNavigationItemGroupClassKey } from '../components/FooterNavigationItemGroup';
import { HeaderClassKey } from '../components/Header';
import { HeaderNavLinkClassKey } from '../components/Header/HeaderNavLink';
import { HeaderNavGroupClassKey } from '../components/Header/HeaderNavGroup';
import { HeaderNavLinkNestedClassKey } from '../components/Header/HeaderNavLinkNested';
import { HeroClassKey } from '../components/Hero';
import { MediaClassKey } from '../components/Media';
import { PersonClassKey } from '../components/Person';
import { SectionClassKey } from '../components/Section';
import { NavigationBarClassKey } from '../components/NavigationBar';
import { PageClassKey } from '../components/Page';
import { PhrasesClassKey } from '../components/Phrases';
import { CalendlyClassKey } from '../components/Calendly';
import { ModuleIntegrationClassKey } from '../components/ModuleIntegration';
import { QuoteClassKey } from '../components/Quote';
// import { CollectionCarouselClassKey } from '../components/CollectionCarousel';
// import { MailchimpFormClassKey } from '../components/MailchimpForm';
// import { BackToTopClassKey } from '../components/BackToTop';
// import { FormMarketoEmbedClassKey } from '../components/FormMarketoEmbed';

declare module '@mui/material/styles' {
  export interface ComponentNameToClassKey {
    Accordion: AccordionClassKey;
    Block: BlockClassKey;
    Blog: BlogClassKey;
    Card: CardClassKey;
    ContentModule: ContentModuleClassKey;
    ErrorBoundary: ErrorBoundaryClassKey;
    SEO: SEOClassKey;
    ContentPreview: ContentPreviewClassKey;
    NavigationItem: NavigationItemClassKey;
    Text: TextClassKey;
    Image: ImageClassKey;
    Link: LinkClassKey;
    GlobalFooter: GlobalFooterClassKey;
    FooterNavigationItem: FooterNavigationItemClassKey;
    FooterNavigationItemGroup: FooterNavigationItemGroupClassKey;
    Header: HeaderClassKey;
    HeaderNavLink: HeaderNavLinkClassKey;
    HeaderNavGroup: HeaderNavGroupClassKey;
    HeaderNavLinkNested: HeaderNavLinkNestedClassKey;
    Hero: HeroClassKey;
    // MailchimpForm: MailchimpFormClassKey;
    Media: MediaClassKey;
    Section: SectionClassKey;
    Collection: CollectionClassKey;
    Person: PersonClassKey;
    Phrases: PhrasesClassKey;
    Calendly: CalendlyClassKey;
    ModuleIntegration: ModuleIntegrationClassKey;
    // CollectionCarousel: CollectionCarouselClassKey;
    CollectionFiltered: CollectionFilteredClassKey;
    CollectionAccordion: CollectionAccordionClassKey;
    NavigationBar: NavigationBarClassKey;
    // BackToTop: BackToTopClassKey;
    // FormMarketoEmbed: FormMarketoEmbedClassKey;
    Page: PageClassKey;
    Quote: QuoteClassKey;
  }
}
