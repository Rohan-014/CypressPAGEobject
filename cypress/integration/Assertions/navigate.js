describe('navigation commands', () => {
    it('test1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("//a[text()='Free Access to InterviewQues/ResumeAssistance/Material']").click()
        

        cy.go('back')
        cy.go('forward')
        cy.reload()
        
    });
});