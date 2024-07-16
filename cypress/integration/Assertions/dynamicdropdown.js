describe('dynamic dropdown  ', () => {
    it('test1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('.ui-autocomplete-input').type('in')

        cy.get('.ui-menu-item').each(($option)=>{

            if($option.text()=='Finland'){
                cy.wrap($option).click();
            }
        })
        
    });

    it('test2', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('.ui-autocomplete-input').type('ja')

        cy.get('.ui-menu-item').each(($option)=>{

            if($option.text()=='Japan'){
                cy.wrap($option).click();
            }
        })

        
    });

    it('test3 contains approch', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('.ui-autocomplete-input').type('in');
        cy.get('.ui-menu-item').contains('India').click();
    });
});