///<reference types='cypress'/>
describe('Mouse actions test', () => {
    it('right click test', () => {
        
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        cy.xpath("//*[.='right click me']").rightclick();
        //cy.get('')

        cy.xpath('//button').dblclick({force:true});

    });

    it('hover test', () => {
    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        cy.get('#mousehover').invoke('show')

        cy.contains('Top').click({force:true});
        cy.url().should('include','top');
    });
    
    it('second method', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');
    });
    
});