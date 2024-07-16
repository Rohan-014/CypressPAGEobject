///<reference types='cypress'/>
before(() => {
    cy.fixture('example').then((data) => {
        globalThis.data = data;
    });
});

describe('OrangeHRM suite', () => {
    it('Login Test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get("input[name='username']").type(globalThis.data.username);
        cy.get("input[name='password']").type(globalThis.data.password);
        cy.get("button[type='submit']").click();
    });
});