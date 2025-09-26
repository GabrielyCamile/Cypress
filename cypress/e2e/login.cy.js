import commum_page from '../support/pages/commum_page'
import login_usuario_pages from '../support/pages/login_usuario_pages';


describe('Login', () =>{

    const emailIncorreto = "gabrielycamileemail.com"
    const senha = "123456"
    const senhaincorreta = "12345"
    const email = "exemplo@email.com";


    beforeEach('Acessar tela de login', () => {
        commum_page.acessarLoginUsuario()
})

    it('preencher campo e-mail',() =>{
        login_usuario_pages.preencheEmail(email)

    })

    it('preencher campo senha',() =>{
        login_usuario_pages.preencheSenha(senha)

    })

    it('mensagem de erro campo e-mail',() =>{
        login_usuario_pages.preencheEmail(emailIncorreto)
        login_usuario_pages.clicarBotaoLogin()
        login_usuario_pages.mensagemErroEmail()

    })

    it('mensagem de erro campo senha',() =>{
        login_usuario_pages.preencheEmail(email)
        login_usuario_pages.preencheSenha(senhaincorreta)
        login_usuario_pages.clicarBotaoLogin()
        login_usuario_pages.mensagemErroSenha()

    })

    it('lembrar de mim',() =>{
        login_usuario_pages.marcarLembrarDeMim()
        login_usuario_pages.desmarcarLembrarDeMim()
    })

    it('login com sucesso',() =>{
        login_usuario_pages.preencheEmail(email)
        login_usuario_pages.preencheSenha(senha)
        login_usuario_pages.clicarBotaoLogin()
        login_usuario_pages.mensagemDeSucesso()


    })

})