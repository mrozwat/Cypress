

describe('test grifner',()=>{

    it('grifner btn',()=>{
cy.viewport(1920,1080);
cy.visit('https://grinfer.com/');
cy.xpath('/html/body/div[2]/main/div[1]/div[2]/div[2]/div').should('be.visible').click();
cy.get('.sc-8lxa00-7').should('be.visible');
cy.get(':nth-child(1) > .sc-8lxa00-9').should('be.visible').click();
})

it('grifner input',()=>{
    cy.viewport(1920,1080);
    cy.visit('https://grinfer.com/');
    cy.xpath('/html/body/div[2]/main/div[1]/div[2]/div[4]/div/div/div/input').type('qa').should('have.value','qa').type('{enter}');
    // cy.get('.sc-tghwm-0').
    cy.xpath('/html/body/div[2]/main/div[1]/div/div/div[1]/div/div/input').should('have.value','qa');
    cy.wait(1000);
    cy.get(':nth-child(1) > .sc-g7i5pe-1 > .sc-1m292s3-1 > .sc-1m292s3-0').click();
    cy.get('.sc-1xj3xob-0').click();
    cy.get('#page-root > :nth-child(2) > :nth-child(2)').should('be.visible');
    })


})

