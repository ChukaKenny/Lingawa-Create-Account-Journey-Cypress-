// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import {DigitRandomizer,generateRandomLetters} from "../Integration/Variables/generalFunctions"

 Cypress.Commands.add('chooseNumberOfIndividuals', () => {  
    let pg1Count = 0;
    let selectedCount = DigitRandomizer(11)
    while (pg1Count < selectedCount) {
        cy.get('.rounded-r-3xl').click()
        pg1Count++
    }
    
 })

 Cypress.Commands.add('selectWordsThatDescribeYou',  () => {
    cy.get(`.grid > :nth-child(${firstBatchSelector()})`).click()
 })


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })