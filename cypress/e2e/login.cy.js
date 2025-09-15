import { faker } from '@faker-js/faker';
import commum_page from '../support/pages/commum_page'
import login_usuario_pages from '../support/pages/login_usuario_pages';


describe('Login', () =>{

    // beforeEach('Acessar tela de login'), () =>{
    //         commum_page.acessarLoginUsuario()
    //     }
    
    it('preencher campo e-mail',() =>{
        
        login_usuario_pages.preencheEmail('gabrielycamile@gmail.com')


    })

    it('preencher campo senha',() =>{
        commum_page.acessarLoginUsuario()
        login_usuario_pages.preencheSenha('123456')

    })

    it('mensagem de erro campo e-mail',() =>{
        commum_page.acessarLoginUsuario()
        login_usuario_pages.preencheEmail('gabriely')
        login_usuario_pages.clicarBotaoLogin()
        login_usuario_pages.mensagemErroEmail('E-mail inválido.')

    })

    it.only('mensagem de erro campo senha',() =>{
        commum_page.acessarLoginUsuario()
        login_usuario_pages.preencheEmail('gabrielycamile@gmail.com')
        login_usuario_pages.preencheSenha('12345')
        login_usuario_pages.clicarBotaoLogin()
        login_usuario_pages.mensagemErroSenha('Senha inválida.')

    })

})