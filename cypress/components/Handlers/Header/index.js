/** @format */
import hElements from '../../Elements/Header/elements'

// Class where functions related to Header are stored.

export default class Header {
    // This function completes minimal data in registration form necessary for a valif registration with email.
    static SignUp = () => {     
        cy.get(hElements.hRegistration).click()
        cy.url().should('eq', 'https://demo.casino/user/registration')
    };

}