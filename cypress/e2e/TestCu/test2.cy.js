describe('Cu found iphone',function(){
    it('found iphone', function(){
        cy.viewport(1920,1080);

        cy.visit('https://www.mvideo.ru/');

       cy.get('input[type="text"]').type('Iphone 12');

       cy.get('.search-icon').click();

       cy.contains('Смартфон Apple iPhone 12 64GB Black').click();

       cy.get('.cart-button').click();
        // cy.contains("Войти").click()

        // cy.get('input[type="tel"]').type('9373970242').should('have.value','+7 (937) 397-02-42')

        
    })
})


