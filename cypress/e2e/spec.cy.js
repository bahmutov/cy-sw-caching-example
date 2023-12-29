// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-cdp
import 'cypress-cdp'

it('loads the updated test script', () => {
  cy.visit('/')
  // change the number and confirm the
  // updated test runs right away
  cy.log('1')
})

// after the tests are done
// delete the "build" cache that can cache the spec file
// https://chromedevtools.github.io/devtools-protocol/
// use the "CacheStorage" interface
