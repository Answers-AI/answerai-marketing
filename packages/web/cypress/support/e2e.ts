// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import '@percy/cypress';
import '@cypress/code-coverage/support';
import 'cypress-real-events/support';

const VERCEL_JWT: string | undefined = Cypress.env('vercel_jwt');
const BASE_URL: string | null = Cypress.config('baseUrl');

export function getVercelJWTHeader(): { [Cookie: string]: string } | undefined {
  /**
   * If vercel JWT is set, assume execution from pipeline and get Cookie to authenticate against preview deployment.
   */
  if (VERCEL_JWT) {
    cy.task('log', `ℹ️ Found vercel JWT for ${BASE_URL}`);
    cy.task('log', '🍪 Getting vercel JWT to set Cookie header');

    return { Cookie: VERCEL_JWT };
  }

  return undefined;
}

export function handleVercelJWTAuth() {
  if (VERCEL_JWT) {
    /**
     * Incercept all requests made from cypress going to baseUrl and add the header in this env
     * so assets load correctly.
     */
    cy.task('log', `📡 Intercepting for ${BASE_URL}/**`);
    cy.task('log', '🍪 Setting Cookie header for vercel JWT');
    cy.intercept(`${BASE_URL}/**`, (req) => {
      if (!req.headers['Cookie']) {
        req.headers['Cookie'] = VERCEL_JWT;
      }
    });
  }
}
