

describe('Dropdown test', () => {
    it('test1--by value', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //handling dropdown using value 
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')

        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

        cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
        
    });

    it('test2--by text', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
        // handling dropdown using text
        cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1')
    
        cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2')
    
        cy.get('#dropdown-class-example').select('Option3').should('have.value', 'option3')

        
    });
    
    it('test3 --by index', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select(1).should('have.value','option1');

        cy.get('#dropdown-class-example').select(2).should('have.value','option2');

        cy.get('#dropdown-class-example').select(3).should('have.value','option3');
        
        
    });
});