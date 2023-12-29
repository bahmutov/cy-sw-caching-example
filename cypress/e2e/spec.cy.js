// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-cdp
import 'cypress-cdp'

// simply bypass the service worker
// when requesting the network resources
// including the next spec run
beforeEach(() => {
  cy.CDP('Network.setBypassServiceWorker', {
    bypass: true,
  })
})

it('loads the updated test script', () => {
  cy.visit('/')
  cy.log('1')
})

// delete the "build" cache that can cache the spec file
// after(() => {
//   const baseUrl = Cypress.config('baseUrl')
//   cy.CDP('CacheStorage.requestCacheNames', {
//     securityOrigin: baseUrl,
//   })
//     .its('caches')
//     .invoke('find', (cache) => cache.cacheName === 'build')
//     .then((buildCache) => {
//       if (buildCache) {
//         cy.CDP('CacheStorage.deleteCache', {
//           cacheId: buildCache.cacheId,
//         })
//       }
//     })
// })

// delete the service worker to stop using
// the cached version on the next test run
// after(() => {
//   const scopeURL = Cypress.config('baseUrl')
//   cy.CDP('ServiceWorker.enable')
//   cy.CDP('ServiceWorker.stopAllWorkers')
//   cy.CDP('ServiceWorker.unregister', {
//     scopeURL,
//   })
// })
