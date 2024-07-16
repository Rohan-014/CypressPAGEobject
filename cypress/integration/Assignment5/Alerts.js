describe('Alersts test', () => {
    it('test1', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('button[onclick="jsAlert()"]').click();

        cy.on('window:alert',(alertmsg)=>{

            expect(alertmsg).to.equal('I am a JS Alert')

    });
});

it('test2', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get('button[onclick="jsConfirm()"]').click();

    cy.on('window:alert', (alertMsg) => {
        expect(alertMsg).to.equal('I am a JS Confirm');
    });
});

it('test3', () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    cy.get('button[onclick="jsPrompt()"]').click();

    cy.on('window:alert', (alertMsg) => {
        expect(alertMsg).to.equal('I am a JS prompt');
    });
});
});
