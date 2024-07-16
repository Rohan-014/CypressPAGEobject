class login_po{
    EnterURL(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    Login_po(){
        cy.get("input[name='username']").type('Admin')
        cy.get("input[name='password']").type('admin123')
        cy.get("button[type='submit']").click()
    }

    clickonforgotpasswor(){
        cy.rightclick('.orangehrm-login-header').click();

    }
}export default login_po;