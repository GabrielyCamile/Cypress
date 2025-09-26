## Cenarios de Teste

 #### Feature: Cadastro de usuario

  Como usuario

  Eu quero realizar um cadastro

  Para utilizar o site QAzando Shop

  #

#### Pré condições para realizar cadastro

- O usuário deve ter acesso ao site via Desktop/Mobile
#


| Cenario 001:  campo nome vazio  |      
| :---------- | 
| DADO QUE estou na tela de cadastro|       
| Quando clico em cadstrar|
| Entao devo visualizar a mensagem de erro "O campo nome deve ser prenchido".|

| Cenario 002: campo e-mail vazio   |      
| :---------- | 
| DADO QUE estou na tela de cadastro|
| E digito o nome| 
| E não digito o e-mail|       
| Quando clico em cadstrar|
| Entao devo visualizar a mensagem de erro "O campo e-mail deve ser prenchido corretamente".|

| Cenario 003: campo e-mail inválido   |      
| :---------- | 
| DADO QUE estou na tela de cadastro| 
| E digito o nome|  
| E preencho o e-mail de forma incorreta|     
| Quando clico em cadstrar|
| Entao devo visualizar a mensagem de erro "O campo e-mail deve ser prenchido corretamente".|

| Cenario 004: campo senha vazio  |      
| :---------- | 
| DADO QUE estou na tela de cadastro| 
| E digito o nome|  
| E preencho o e-mail|  
| E não preencho a senha|     
| Quando clico em cadstrar|
| Entao devo visualizar a mensagem de erro "O campo e-mail deve ser prenchido corretamente".|

| Cenario 005: campo senha invalido |      
| :---------- | 
| DADO QUE estou na tela de cadastro| 
| E digito o nome|  
| E preencho o e-mail|  
| E preencho a senha com menos de 6 digitos|     
| Quando clico em cadstrar|
| Entao devo visualizar a mensagem de erro "O campo e-mail deve ser prenchido corretamente".|

| Cenario 006: Cadastro com sucesso |      
| :---------- | 
| DADO QUE estou na tela de cadastro| 
| E digito o nome|  
| E preencho o e-mail|  
| E preencho a senha de 6 digitos|     
| Quando clico em cadstrar|
| Entao devo visualizar a mensagem de sucesso "Cadastro realizado! Bem-vindo + nome".|

 
