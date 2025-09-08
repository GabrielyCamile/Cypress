
import { faker } from '@faker-js/faker';

import commum_page from '../support/pages/commum_page'
import cadastro_usuario_pages from '../support/pages/cadastro_usuario_pages'


describe('Cadastro de usuario', () =>{

    beforeEach('Acessar cadastro de usuario', ()=>{
        commum_page.acessarCadastroUsuario()
    })

    it('Campo nome vazio',() =>{
        cadastro_usuario_pages.clicarCadastrar()
        cadastro_usuario_pages.validarMensagemErro('O campo nome deve ser prenchido')
        //exemplo de assert sem a mensagem por parametro
        // cadastro_usuario_pages.validarMensagemErro()
    })


    it('Campo email vazio',() =>{
        cadastro_usuario_pages.preencheNome(faker.person.fullName())
        cadastro_usuario_pages.clicarCadastrar()
        cadastro_usuario_pages.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo email invalido',() =>{
        cadastro_usuario_pages.preencheNome(faker.person.fullName())
        cadastro_usuario_pages.preencheEmail(faker.person.firstName())
        cadastro_usuario_pages.clicarCadastrar()
        cadastro_usuario_pages.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio',() =>{
        cadastro_usuario_pages.preencheNome(faker.person.fullName())
        cadastro_usuario_pages.preencheEmail(faker.internet.email())
        cadastro_usuario_pages.clicarCadastrar()
        cadastro_usuario_pages.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha invalido',() =>{
        cadastro_usuario_pages.preencheNome(faker.person.fullName())
        cadastro_usuario_pages.preencheEmail(faker.internet.email())
        cadastro_usuario_pages.preencheSenha('123')
        cadastro_usuario_pages.clicarCadastrar()
        cadastro_usuario_pages.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', async () =>{

        const name = await faker.person.fullName()

        cadastro_usuario_pages.preencheNome(name)
        cadastro_usuario_pages.preencheEmail(faker.internet.email())
        cadastro_usuario_pages.preencheSenha('123456')
        cadastro_usuario_pages.clicarCadastrar()
        cadastro_usuario_pages.validarMensagemSucesso(name)
    })
})