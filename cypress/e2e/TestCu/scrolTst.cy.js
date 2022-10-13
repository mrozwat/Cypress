
const finddiv = document.querySelector('.ejG8W kypwe')

describe('scrol',()=>{
    it('scrol carusele', ()=>{
        
        cy.visit('https://unsplash.com/');

        cy.xpath('/html/body/div/div/div[3]/div[1]/div/div[2]/div/div[1]/div/div/div/div[2]/div[1]/form/div[1]/input').type('shiba{enter}');

        cy.get('[data-test="page-header-title"]').should('have.text','Shiba');

        cy.wait(3000)

        cy.scrollTo(0,2500)

        cy.get(':nth-child(1) > :nth-child(2) > .YdIix > :nth-child(1) > .GIFah > .zmDAx > .rEAWd > .omfF5 > .MorZF > .VQW0y > [data-test="photo-grid-multi-col-img"]').click();
    })
})

