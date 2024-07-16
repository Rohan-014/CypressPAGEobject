describe('OrangeHRM suite', () => {
    it('Login Test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Check placeholder attribute and type username
        cy.get("input[name='username']").then($username => {
            expect($username).to.have.attr('placeholder', 'Username')
            cy.wrap($username).type('Admin')
        })

        // Type password and submit the form
        cy.get("input[name='password']").then($password => {
            expect($password).to.have.attr('placeholder', 'Password')
            cy.wrap($password).type('admin123')
        })

        cy.get("button[type='submit']").then($submit => {
            expect($submit).to.have.attr('type', 'submit')
            cy.wrap($submit).click()
        })

        cy.get('.oxd-userdropdown-icon').click();
        cy.wait(2000)
        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').each(($dropdown_ele)=>{
            if($dropdown_ele.text()=='Logout'){
                cy.wrap($dropdown_ele).click()
            }
        })
        
    });
});