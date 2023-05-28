import { getVercelJWTHeader, handleVercelJWTAuth } from '../support/e2e';

const MAIN_CARD_SLIDER_ACTIVE_SLIDE =
  '[data-testid=Tabs-mainSwiperDesktop] .swiper-slide.swiper-slide-visible.swiper-slide-active';
const SECONDARY_LOGO_SLIDER_ACTIVE_SLIDE =
  '[data-testid=Tabs-secondarySwiperDesktop] .swiper-slide.swiper-slide-visible.swiper-slide-active';

describe(`Visiting homepage should show the quotes module`, () => {
  beforeEach(() => {
    const vercelJWTHeader = getVercelJWTHeader();
    handleVercelJWTAuth();
    cy.visit('/', { headers: vercelJWTHeader });
  });
});

describe(`Visiting homepage should show the customer logos module`, () => {
  beforeEach(() => {
    const vercelJWTHeader = getVercelJWTHeader();
    handleVercelJWTAuth();
    cy.visit('/', { headers: vercelJWTHeader });
  });
});
