describe('login',function(){
    it('sing in', function(){
        cy.visit('https://www.mvideo.ru/')

        cy.contains("Войти").click()

        cy.get('input[type="tel"]').type('9373970242').should('have.value','+7 (937) 397-02-42')

        cy.contains("Продолжить").click()

        cy.get('.login-form__header_indent_sm').should('have.text',' Подтверждение ')

        cy.get('.pin-form-phone').should('have.text',' +7 (937) 397-02-42 ')
    })
})


