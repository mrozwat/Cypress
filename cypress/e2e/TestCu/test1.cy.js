describe('login',function(){
    it('sing in', function(){
        cy.visit('https://www.mvideo.ru/')

        cy.contains("Войти").click()

        cy.get('input[type="tel"]').type('9373970242')

        cy.contains("Продолжить").click()
        
    })
})