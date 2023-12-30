// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-cdp
import 'cypress-cdp'

// simply bypass the service worker
// when requesting the network resources
// including the next spec run

it('loads the updated test script', () => {
  cy.visit('/')
  cy.log('1')
})
