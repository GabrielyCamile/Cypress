## Cenarios de Teste - Cadastro

 #### Feature: Cadastro de usuario

  Como usuario

  Eu quero realizar um cadastro

  Para realizar meu cadastro no site QAzando Shop

  #

#### Pré condições para realizar cadastro

- O usuário deve ter acesso ao site via Desktop/Mobile
#


| Cenario 001:  campo nome vazio  |      
| :---------- | 
| DADO que estou na tela de cadastro|       
| QUANDO clico em cadstrar|
| ENTÃO devo visualizar a mensagem de erro "O campo nome deve ser prenchido".|

| Cenario 002: campo e-mail vazio   |      
| :---------- | 
| DADO que estou na tela de cadastro|
| E digito o nome| 
| E não digito o e-mail|       
| QUANDO clico em cadstrar|
| ENTÃO devo visualizar a mensagem de erro "O campo e-mail deve ser prenchido corretamente".|

| Cenario 003: campo e-mail inválido   |      
| :---------- | 
| DADO que estou na tela de cadastro| 
| E digito o nome|  
| E preencho o e-mail de forma incorreta|     
| QUANDO clico em cadstrar|
| ENTÃO devo visualizar a mensagem de erro "O campo e-mail deve ser prenchido corretamente".|

| Cenario 004: campo senha vazio  |      
| :---------- | 
| DADO que estou na tela de cadastro| 
| E digito o nome|  
| E preencho o e-mail|  
| E não preencho a senha|     
| QUANDO clico em cadstrar|
| ENTÃO devo visualizar a mensagem de erro "O campo e-mail deve ser prenchido corretamente".|

| Cenario 005: campo senha invalido |      
| :---------- | 
| DADO que estou na tela de cadastro| 
| E digito o nome|  
| E preencho o e-mail|  
| E preencho a senha com menos de 6 digitos|     
| QUANDO clico em cadstrar|
| ENTÃO devo visualizar a mensagem de erro "O campo e-mail deve ser prenchido corretamente".|

| Cenario 006: Cadastro com sucesso |      
| :---------- | 
| DADO que estou na tela de cadastro| 
| E digito o nome|  
| E preencho o e-mail|  
| E preencho a senha de 6 digitos|     
| QUANDO clico em cadstrar|
| ENTÃO devo visualizar a mensagem de sucesso "Cadastro realizado! Bem-vindo + nome".|
#
## Cenarios de Teste - Login

 #### Feature: Login de usuario

  Como usuario

  Eu quero realizar o Login

  Para acessar a minha conta no site QAzando Shop

  #

#### Pré condições para realizar cadastro

- O usuário deve ter acesso ao site via Desktop/Mobile
#
| Cenario 001:  preencher campo e-mail  |      
| :---------- | 
| DADO que estou na tela de login|       
| QUANDO preencho o campo e-mail|
| ENTÃO devo visualizar o campo email preenchido.|

| Cenario 002:  preencher campo senha  |      
| :---------- | 
| DADO que estou na tela de login|       
| QUANDO preencho o campo senha|
| ENTÃO devo visualizar o campo senha preenchido.|

| Cenario 003:  mensagem de erro campo e-mail |      
| :---------- | 
| DADO que estou na tela de login|
| E preencho o campo email de forma incorreta|       
| QUANDO clico no botão Login|
| ENTÃO devo visualizar a mensagem de erro "E-mail inválido.".|

| Cenario 004:  mensagem de erro campo senha |      
| :---------- | 
| DADO que estou na tela de login|
| E preencho o campo email | 
| E preencho o campo senha com menos de 6 digitos |      
| QUANDO clico no botão Login|
| ENTÃO devo visualizar a mensagem de erro "Senha inválida.".|

| Cenario 005:  lembrar de mim marcado|      
| :---------- | 
| DADO que estou na tela de login|    
| QUANDO clico no checkbox lembrar de mim|
| ENTÃO devo visualizar o checkbox marcado.|

| Cenario 006:  lembrar de mim desmarcado|      
| :---------- | 
| DADO que estou na tela de login|  
| E clico no checkbox lembrar de mim |   
| QUANDO clico no checkbox lembrar de mim novamente|
| ENTÃO devo visualizar o checkbox desmarcado.|

| Cenario 007:  mensagem de erro campo senha |      
| :---------- | 
| DADO que estou na tela de login|
| E preencho o campo email | 
| E preencho o campo senha |      
| QUANDO clico no botão Login|
| ENTÃO devo visualizar a mensagem de sucesso "Login realizado!".|
|E "Olá, exemplo@email.com"|




 
