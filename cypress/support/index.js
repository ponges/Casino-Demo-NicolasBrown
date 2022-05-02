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
import './commands'
//For Generating random 7 digit mumber
Cypress.config('UniqueNumber', `${Math.floor(Math.random() * 9999999)}`)
// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.config('ValidUser', `ponges123`)
Cypress.config('ValidUserPass', `Nico@6571`)
