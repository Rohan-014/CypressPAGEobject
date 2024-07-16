describe('tables test', () => {
    it('test1', () => {

        cy.visit('https://the-internet.herokuapp.com/tables')
        
        cy.xpath('//table[@id="table1"]/tbody/tr[4]/td').each(($ele) =>{

            if($ele.text().includes('Tim')){

                cy.wrap($ele).next().then((num) => {
                    cy.log(num.text())
                })

            }

        })
    });

    it('table 2', () => {

        cy.visit('https://the-internet.herokuapp.com/tables')

        cy.xpath('//table[@id="table2"]/tbody/tr[2]/td').each(($ele1)=>{
            if($ele1.text().includes('$51.00')){
                cy.wrap($ele1).next().then((num)=>{
                    cy.log(num.text())
                })
            }
        })

        
    });
    
});