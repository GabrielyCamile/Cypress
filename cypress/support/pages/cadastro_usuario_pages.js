

export default{
    clicarCadastrar(){
        cy.get('#btnRegister')
            .click()
    },

   // validarMensagemErro(){
     //   cy.get('.errorLabel')
       //     .then((element) =>{
         //       expect(element).to.be.visible
           //     expect(element.text()).eq('O campo nome deve ser prenchido')
            //})
   // }

   //exemplos de asserts(should e expect) com page objects

    //validarMensagemErro(){
       // cy.get('.errorLabel')
         //   .should('be.visible')
          //  .should('have.text', 'O campo nome deve ser prenchido')


   // }
   // Assert com should
    validarMensagemErro(mensagem){
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', mensagem)


    },

    preencheNome(nome){
        cy.get('#user')
            .type(nome)    
    },

    preencheEmail(email){
        cy.get('#email')
            .type(email)    
    },

    preencheSenha(senha){
        cy.get('#passwords')
            .type(senha)    
    },

    validarMensagemSucesso(nome){
        cy.get('#swa12-title')
            .should('be.visible')
            .should('have.text','Cadastro realizado!')

        cy.get('#swa12-html-container')
            .should('be.visible')
            .should('have.text', + nome)  // ou ´bem vindo ${nome}´
    },
}