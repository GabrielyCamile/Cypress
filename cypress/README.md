## Cenarios de Teste

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

 
