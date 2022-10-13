
describe('Assert',()=>{
    it('Assert web tesr',()=>{
        
        cy.viewport(1920,1080);

        cy.visit('https://unsplash.com/');
        
        cy.location('protocol').should('eq','https:');

        cy.title().should('eq','Beautiful Free Images & Pictures | Unsplash');

        cy.contains('Log in').should('be.visible').click();

        cy.get('input[id="user_email"]').type('pocemail@mail.ru').should('have.value','pocemail@mail.ru');

        cy.get('input[id="user_password"]').type('SS21%aaW').should('have.value','SS21%aaW');

        cy.get('input[type="submit"]').should('be.visible').click();

        cy.get('.flash__container').should('be.visible');

    })
})


// cy.get('a[class="flash flash--alert animated js-flash js-flash-alert"]') поиск по группе класов, но тут 2 таких 