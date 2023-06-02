import { getVercelJWTHeader, handleVercelJWTAuth } from '../support/e2e';

describe(`Header`, () => {
  beforeEach(() => {
    const vercelJWTHeader = getVercelJWTHeader();
    handleVercelJWTAuth();
    cy.viewport(600, 660);
    cy.visit('/', { headers: vercelJWTHeader });
  });

  it(`should hide supernav on mobile screens`, () => {
    const SUPERNAV = '[data-testid=Header-SuperNav]';

    cy.get(SUPERNAV, { timeout: 8000 }).should('have.css', 'maxHeight', '100%');
    cy.get(SUPERNAV).invoke('outerHeight').should('be.gt', 0);
    cy.get(SUPERNAV).should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');

    cy.get(SUPERNAV, { timeout: 13000 }).should('have.css', 'maxHeight', '0%');
    cy.get(SUPERNAV).should('have.css', 'height', '0px');
    cy.get(SUPERNAV).should('have.css', 'transform', 'matrix(1, 0, 0, 0, 0, 0)');
  });
});

export {};
