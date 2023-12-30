// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-cdp
import 'cypress-cdp'

it('loads the updated test script', () => {
  cy.visit('/')
  cy.log('1')
})

// delete the service worker to stop using
// the cached version on the next test run
// Tip: you must enable ServiceWorker CDP module
after(() => {
  const scopeURL = Cypress.config('baseUrl')
  cy.CDP('ServiceWorker.enable')
  cy.CDP('ServiceWorker.stopAllWorkers')
  cy.CDP('ServiceWorker.unregister', {
    scopeURL,
  })
})
