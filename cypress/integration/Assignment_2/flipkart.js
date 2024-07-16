describe('Flipkart suite', () => {
    it('css test', () => {
        cy.visit('https://www.flipkart.com/')

        cy.get('a[class="_1TOQfO"][title="Login"]')

        cy.get('a[title="Cart" ][class="_1krdK5 _3jeYYh"]')

        cy.get('input[title="Search for Products, Brands and More"]')

        cy.get('img[title="Flipkart"]')

        cy.get('a[aria-label="Grocery"]')

        cy.get('input[class="r4vIwl BV+Dqf"]')

        cy.get('button[class="QqFHMw twnTnD _7Pd1Fp"]')

        cy.get('span[class="TSD49J nEqBzi"]')


    });
});