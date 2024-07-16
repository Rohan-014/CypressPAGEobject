describe('wait test', () => {
    it('test1', () => {

        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')

        cy.get('#start').click();
        cy.wait(2000)
        cy.reload();
    });
});