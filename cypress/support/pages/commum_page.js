

export default{
    acessarCadastroUsuario(){
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-lock')
            .click()
    
    },

    acessarLoginUsuario(){
       cy.visit('/')
             .get('.header-logo')

        cy.get('.fa-user') 
            .click()
    }

    
}