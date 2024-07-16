describe('automationteststore suite', () => {
    it('add to cart test', () => {
        // visiting to website
        cy.visit('https://automationteststore.com/')


        //clicked Apparel&Acceccories
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();

        //clicked t-shirt
        cy.get('ul.thumbnails > :nth-child(2) > :nth-child(1) > img').click();

        //cliced third t-shirt
        cy.get(':nth-child(3) > .thumbnail > :nth-child(1) > img').click();

        //selecting size ,color, quntity
        cy.get('select[id="option350"]').select('775')

        cy.get('select[id="option351"]').select('Medium')

        cy.get('input[name="quantity"]').clear().type('2')


        //clicked to add to cart
        cy.get('.cart').click();

        //clicked checkout
        
        cy.get('#cart_checkout1').click();
        //clicked to guest
        cy.get('input[value="guest"]').check()

        cy.get('button[title="Continue"]').click();

        //registration information addded
        cy.get('#guestFrm_firstname').type('rohan')

        cy.get('#guestFrm_lastname').type('patil')

        cy.get('#guestFrm_email').type('rohan19@gmail.com')

        cy.get('#guestFrm_telephone').type('9373964251')

        cy.get('#guestFrm_fax').type('xyzzz')

        cy.get('#guestFrm_address_1').type('kumar nagar')

        cy.get('#guestFrm_address_2').type('sant tukaram nagar')

        cy.get('#guestFrm_city').type('dhule')

        cy.get('#guestFrm_zone_id').select('Angus')

        cy.get('#guestFrm_postcode').type('254891')

        cy.get('#guestFrm_country_id').select('India')


        cy.get('button[title="Continue"]').click();


        //clicked checkout
        cy.get('#checkout_btn').click();


        //conforming page
        cy.contains(' Your Order Has Been Processed!').should('be.visible')

        //closed window
        cy.window().then(ele =>{
            ele.close()
        })

    });
});