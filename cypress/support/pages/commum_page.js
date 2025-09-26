

export default{
    acessarCadastroUsuario(){
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-lock')
            .click()
    
    },

    acessarLoginUsuario(){
        cy.visit('/login')
            .get('.logo').should('be.visible')

        cy.get('.fa.fa-user')

    
},
}