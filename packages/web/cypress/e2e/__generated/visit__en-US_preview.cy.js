import { getVercelJWTHeader, handleVercelJWTAuth } from '../../support/e2e';
// This is a generated file from the list of pages in fixtures/generated_pages.json

describe(`Visit `, () => {
  it(`/en-US/preview renders correctly`, () => {
    const vercelJWTHeader = getVercelJWTHeader();
    handleVercelJWTAuth();
    cy.visit('/en-US/preview', { headers: vercelJWTHeader });

    // Percy
    cy.percySnapshot();
  });
});
