class Login{

   btnLogin(){
    return cy.contains('Log in')
   }
   email(){
 return cy.get('input[id="user_email"]')
   }

   password(){
    return cy.get('input[id="user_password"]')
   }

   clickLoginBtn(){
    return cy.get('input[type="submit"]')
   }
}

export default Login