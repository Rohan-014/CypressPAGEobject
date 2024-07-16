import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('user open the simple form url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form')

})

When('user entere firetname,lastname,email,contact,message',()=>{
    cy.get('#firstName').type('rohan')
    cy.get('#lastName').type('kumar')
    cy.get('#email').type('rohan@gmail.com')
    cy.get('#number').type('1234567890')
    cy.xpath('//texttarea').type('hello')

})

And('user clicks on submit button.',()=>{

    cy.xpath('//input[@value="submit]').click()
})

Then('Alert with a success message is displayed.',()=>{

    cy.on('window:confirm',(alertmsg)=>{
        expect(alertmsg).to.equal('Thank you for reching out yo us, rohan kumar')
        return true
    })

})