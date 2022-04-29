/** @format */

// Imports elements from registration page
import RegistrationElements from '../../Elements/Registration/elements';
// Imports elements from header section
import hElements from '../../Elements/Header/elements';
// Import Functions related to Header
import Header from '../Header/index'


// This abstracts the actions relating to Registration Section

// Class where functions related to Registration are stored.
export default class Registration {
    // This function completes minimal data in registration form necessary for a valif registration with email.
    static RegistrationEmailStart = () => {     
        // Generates a unique user   
        const uniqueUser = Date.now().toString();
        // Uses generated user to create a unique valid email.
        const uniqueEmail = uniqueUser+"@mailinator.com"
        // Click on registration button and verify url function
        Header.SignUp()
        // Complete email
        cy.get(RegistrationElements.rEmailInput).type(uniqueEmail)
        // Complete password
        cy.get(RegistrationElements.rPassInput).type("P@ssword1")
        // Complete confirm password
        cy.get(RegistrationElements.rRePassInput).type("P@ssword1")
        // Click on Terms & Conditions Checkbox
        cy.get(RegistrationElements.rConditionChkBox).click()
        // Display secret question options
        cy.get(RegistrationElements.rSecretQuestionDropDown).click()
        // Select first secret question option
        cy.get(RegistrationElements.rSecretQuestionDropDownSelection).click()
        // Complete secret question answer
        cy.get(RegistrationElements.rAnswerInput).type("Prince")
        // Complete with unique user 
        cy.get(RegistrationElements.rLoginInput).type(uniqueUser)
    };

    // This Function Changes phone to email registration and completes phone number
    static UsePhoneNumber = () => {
        cy.get(RegistrationElements.rUsePhoneBtn).first().click()
        cy.get(RegistrationElements.rPhoneFlag).click()
        cy.get(RegistrationElements.rCountryFlagUS).scrollIntoView().click() 
        cy.get(RegistrationElements.rPhoneInput).type('212'+Cypress.config('UniqueNumber'))

    }

    // This Function Finishes an expected valid Registration and confirms user is routed to Registration Success page
    static RegistrationFinish = () => {
        cy.get(RegistrationElements.rRegisterBtn).click()
        cy.url().should('eq', 'https://demo.casino/registrationSuccess')    
    }


}