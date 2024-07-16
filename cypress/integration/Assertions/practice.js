///<reference types="cypress"/>
describe('Practice tests', () => {
    it('test - URL assertion', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // Asserting URL with the given endpoint
        cy.url().should('include','AutomationPractice')
        // Asserting the title of webpage
        cy.title().should('include','Practice Page')
        //Assert the visibility of the below textbox
        cy.get('[name="show-hide"]').should('be.visible')
        //Assert to check whether an element is invisible
        cy.get('#hide-textbox').click();
        cy.get('[name="show-hide"]').should('not.be.visible')

        cy.get('.ui-autocomplete-input').type('monday').should('have.value','monday')

        //Asserting whether checkbox has been checked
        cy.xpath("//*[@id='checkBoxOption1']").check().should('be.checked');

        cy.xpath("//*[@id='checkBoxOption1']").uncheck().should('not.be.checked');
    });

});