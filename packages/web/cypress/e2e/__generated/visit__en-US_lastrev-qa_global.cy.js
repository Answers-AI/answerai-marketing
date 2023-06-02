import { getVercelJWTHeader, handleVercelJWTAuth } from '../../support/e2e';
// This is a generated file from the list of pages in fixtures/generated_pages.json

describe(`Visit `, () => {
  it(`/en-US/lastrev-qa/global renders correctly`, () => {
    const vercelJWTHeader = getVercelJWTHeader();
    handleVercelJWTAuth();
    cy.visit('/en-US/lastrev-qa/global', { headers: vercelJWTHeader });

    // Percy
    cy.percySnapshot();
  });
});
