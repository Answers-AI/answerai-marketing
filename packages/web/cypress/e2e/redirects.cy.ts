import { getVercelJWTHeader, handleVercelJWTAuth } from '../support/e2e';

describe(`Redirect`, () => {
  beforeEach(() => {
    const vercelJWTHeader = getVercelJWTHeader();
    handleVercelJWTAuth();
    cy.visit('/lr-qa/redirect', { headers: vercelJWTHeader });
  });

  it(`should redirect to homepage`, () => {
    cy.wait(200);
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
});

export {};
