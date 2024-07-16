describe('Redbus suite', () => {
    it('xpath test', () => {

    cy.visit('https://www.redbus.com/')

    cy.xpath('//a[@id="sign-in-icon-down"]').click();

    cy.xpath('//input[@id="src"]')

    cy.xpath('//input[@id="dest"]')

    cy.xpath('//input[@id="onward_cal"]')

    cy.xpath('//button[@id="search_btn"]')

    cy.xpath('//div[@id="profile"]')

    cy.xpath('//ul[@class="bus-items"]')

    cy.xpath('//ul[@class="bus-items"]/li[1]//div[@class="travels"]')

    cy.xpath('//canvas[@id="canvas1"]')

    cy.xpath('//button[contains(text(), "Proceed to book")]')

    cy.xpath('//input[@id="coupon_code"]')

    cy.xpath('//button[@id="apply_coupon"]')

    cy.xpath('//input[@id="passengerName"]')

    cy.xpath('//select[@id="passengerGender"]')

    cy.xpath('//input[@id="payment_method"]')

    cy.xpath('//button[@id="pay_now"]')

    cy.xpath('//input[@id="contact_number"]')

    cy.xpath('//input[@id="email"]')


    });
});