/// <reference types="cypress" />

// Import elements from welcome modal
import wMElements from '../Components/Elements/WelcomeModal/elements'
// Import elements from Header
import hElements from '../Components/Elements/Header/elements'
// Import elements from Registration
import rElements from '../Components/Elements/Registration/elements'
// Import elements from Login
import lElements from '../Components/Elements/Login/elements'
// Import elements from Mobile Bar
import mBElements from '../Components/Elements/MobileBar/elements'
// Import Elements from Profile Page
import pElements from '../components/Elements/Profile/elements'
// Import Functions related to registration section
import Registration from '../Components/Handlers/Registration'
// Import Functions related to header section
import Header from '../Components/Handlers/Header'

describe('example to-do app', () => {
  beforeEach(() => {
    // Before each test starts go to main page and close Welcome Modal
    // In these cases that test Welcome Modal Visit Main Page
    switch(Cypress.currentTest.title) {
      case ('Validate Welcome Modal Elements'):
      case ('Validate Welcome Modal Close'):
      case ('Validate Welcome Modal Got It btn actions'):
      case ('Validate Welcome Modal Learn More btn actions'):  
          cy.visit('https://demo.casino')
      break;
      // Otherwise go to main page and close Welcome Modal
      default:
          cy.visit('https://demo.casino')
          cy.get(wMElements.wMCloseBtn).click()
      break;
 }
  })

  it('Validate Welcome Modal Elements', () => {
    cy.get(wMElements.wMModal).should('be.visible');
    cy.get(wMElements.wMTitle).should('have.text', ' Welcome ');
    cy.get(wMElements.wMText).should('have.text', ' Hope you\'ll enjoy our casino. Please make sure you know everything about the safe gaming. Find all the information in our articles. ');
    cy.get(wMElements.wMCloseBtn).should('be.enabled');
    cy.get(wMElements.wMLearnMoreBtn).should('have.text', 'Learn more');
    cy.get(wMElements.wmGotItBtn).should('have.text', 'Got it');
  })

  it('Validate Welcome Modal Close', () => {
    cy.get(wMElements.wMModal).should('be.visible');
    cy.get(wMElements.wMCloseBtn).click()
    cy.get(wMElements.wMModal).should('not.be.visible');
  })

  it('Validate Welcome Modal Got It btn actions', () => {
    cy.get(wMElements.wMModal).should('be.visible');
    cy.get(wMElements.wmGotItBtn).click()
    cy.get(wMElements.wMModal).should('not.be.visible');
  })

  it('Validate Welcome Modal Learn More btn actions', () => {
    cy.get(wMElements.wMModal).should('be.visible');
    cy.get(wMElements.wMLearnMoreBtn).click()
    cy.url().should('eq', 'https://demo.casino/info/terms-of-us')
  })

  it('Basic Registration with Email', () => {
    Registration.RegistrationEmailStart();
    Registration.RegistrationFinish();
  })

  it('Basic Registration with Phone Number', () => {
    Registration.RegistrationEmailStart();
    Registration.UsePhoneNumber();
    Registration.RegistrationFinish();
  })

  it('Register with Facebook', ()  => {
    // We will validate we are redirected to facebook page
    Header.SignUp()
    cy.get(rElements.rFormFacebookBtn).click()
    cy.url().should('include', 'https://www.facebook.com/')
  })

  it('Register with Google', ()  => {
    // We will just validate that link is correct
    Header.SignUp()
    cy.get(rElements.rFormGoogleBtn).should('have.attr', 'href')
    .and('include', 'https://sollogin.com/social/login/google')
  })

  it('Register with Telegram', ()  => {
    // We will just validate that link is correct
    Header.SignUp()
    cy.get(rElements.rFormTelegramBtn).should('have.attr', 'href')
    .and('include', 'https://sollogin.com/social/login/telegram/')
  })

  it('Verify Form Error Validations', ()  => {
    // We will just validate that link is correct
    Header.SignUp()
    // Clicking Regisster with empty form to check validations
    cy.get(rElements.rRegisterBtn).click()
    // Checking Expected error validations to appear
    cy.get(rElements.rEmailValidationError).should('be.visible');
    cy.get(rElements.rEmailValidationError).should('include.text',"Email or phone number is required.")
    cy.get(rElements.rPasswordValidationError).should('include.text',"Password cannot be blank.")
    cy.get(rElements.rConfirmPasswordValidationError).should('include.text',"Password confirmation cannot be blank.")
    cy.get(rElements.rTermsConditionsValidationError).should('include.text',"You have to accept our Terms and Conditions.")
    cy.get(rElements.rSecretQuestionValidationError).should('include.text',"Secret question cannot be blank")
    cy.get(rElements.rLoginValidationError).should('include.text',"Login cannot be blank.")
    // adding invalid email
    cy.get(rElements.rEmailInput).type('invalid.email@com')
    // adding non matching passwords
    cy.get(rElements.rPassInput).type('Nico@6571')
    cy.get(rElements.rRePassInput).type('Nico#6571')
    // addoing already registered login
    cy.get(rElements.rLoginInput).type(Cypress.config('ValidUser'))
    // selecting secret question but leaving unanswered 

    cy.get(rElements.rRegisterBtn).click()
    cy.get(rElements.rEmailValidationError).should('include.text',"Invalid email.")
    cy.get(rElements.rConfirmPasswordValidationError).should('include.text','Password must be strictly repeated.')

  })
  
  it.only('Login then logout', () => {
    // We will just validate that link is correct
    Header.SignUp()
    cy.get(hElements.hSignInModalSignInBtn).click({force: true})
    cy.url().should('eq', 'https://demo.casino/user/login')
    cy.get(lElements.lLoginInput).type(Cypress.config('ValidUser'))
    cy.get(lElements.lPasswordInput).type(Cypress.config('ValidUserPass'))
    cy.get(lElements.lSubmitBtn).click()
    cy.get(mBElements.mBProfile).last().click()
    // Validate Username is correct
    cy.get(pElements.pProfileName).should('include.text', Cypress.config('ValidUser'))
    // Logout
    cy.get(pElements.pLogOut).click()

  })

})
