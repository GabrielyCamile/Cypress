
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
    mensagemErroEmail(){
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'E-mail inválido.')
    },
    mensagemErroSenha(senha){
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text','Senha inválida.' )
    },
    marcarLembrarDeMim(){
        cy.get('.form-check-input') .check()
        
    },
    desmarcarLembrarDeMim(){
        cy.get('.form-check-input') .uncheck()
    },
    mensagemDeSucesso(){
        cy.get('#swal2-title')
            .should('have.text','Login realizado')

        cy.get('#swal2-html-container')
            .should('have.text', 'Olá, exemplo@email.com' )

                
            
            
    }


}