///<reference types="cypress"/>
describe('automatin test', () => {
    it('test1', () => {
        cy.visit('https://automationteststore.com/')

        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"').click();

        cy.get('#ContactUsFrm_first_name').type("rohan salunkhe")
        cy.get('#ContactUsFrm_email').type("salunkhe19@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("xyz")
        cy.get('button[title="Submit"]').click();
        cy.title().should('include','Contact Us');

        cy.xpath("//p[contains(text(),'Your enquiry has been successfully sent to the store owner!')]")
        .should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    });
});