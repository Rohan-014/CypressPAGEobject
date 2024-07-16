describe('alert test', () => {
    it('test1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click();

        cy.on('window:alert',(alertmsg)=>(
            expect(alertmsg).to.equal('Hello , share needful')
    
        ))
        
    });

    it('pop alert', () => {

        cy.get('#confirmbtn').click();

        cy.on('window:confirm',(msg)=>{
            expect(msg).to.equal('Hello , Are you sure you want to confirm?')
            return false;
        })
        
    });
});