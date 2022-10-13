describe('Cu found iphone',function(){
    it('found iphone', function(){
        cy.viewport(1920,1080);

        cy.visit('https://www.mvideo.ru/');

       cy.get('input[type="text"]').type('Iphone 13');

       cy.get('.search-icon').click();

       cy.contains('Смартфон Apple iPhone 13 Pro 128GB Sierra Blue').click();

       cy.get('_ngcontent-serverapp-c302').click();

       cy.get('.cart-button').click();
        
        
    })
})


