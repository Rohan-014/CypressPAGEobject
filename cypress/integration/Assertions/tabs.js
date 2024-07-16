
describe('windows and tabs', () => {
    it('test1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("//*[.='Open Tab']").invoke('removeAttr','target').click();

        cy.origin('https://www.qaclickacademy.com/',()=>{
        
            //cy.xpath("//*[.='Access all our Courses']").click();
            cy.contains('Access all our Courses').click();
        })
    });

    it.only('test window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
        cy.get('#openwindow').invoke('removeAttr','onclick').click();
    
        cy.origin('https://www.qaclickacademy.com', () => {
            cy.visit('/');
            cy.contains('Access all our Courses').click();

        
    })
    
});

    it('test3', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').invoke('removeAttr','onclick').click();
    
        cy.origin('https://www.qaclickacademy.com', () => {
            cy.visit('/');
            cy.contains('Access all our Courses').click();
            

        
    });
     // Go back to the previous page
     cy.go('back');

     // Perform some action on the previous page (e.g., check a checkbox)
     cy.get('#checkBoxOption1').check();
    
});
});