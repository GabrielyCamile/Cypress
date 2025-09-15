
export default{
   preencheEmail(email){
        cy.get('#user')
            .type(email)    
    },
    preencheSenha(senha){
        cy.get('#password')
            .type(senha)    
    },
    clicarBotaoLogin(){
        cy.get('#btnLogin')
            .click()
    },
    mensagemErroEmail(mensagem){
        cy.get('.invalid_input')
            .should('be.visible')
            .should('contain', mensagem)
    },
    mensagemErroSenha(senha){
        cy.get('.invalid_input')
            .should('be.visible')
            .should('contain', senha)
    }


}