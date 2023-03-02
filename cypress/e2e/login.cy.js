/// <reference types="cypress" />

context('Funcionalidade Login', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    cy.get('#username').type('aluno_ebac@teste.com');
    cy.get('#password').type('teste@teste.com');
    cy.get('.woocommerce-form > .button').click();
    cy.get('.page-title').should('contain', 'Minha conta');
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
      'contain',
      'Olá, Jenkins'
    );
  });
  it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    cy.get('#username').type('larissa@teste.com');
    cy.get('#password').type('teste@teste.com');
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-error > li').should(
      'contain',
      'Endereço de e-mail desconhecido'
    );
  });
  it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    cy.get('#username').type('aluno@teste.com');
    cy.get('#password').type('teste@teste');
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-error > li').should(
      'contain',
      'Erro: a senha fornecida para o e-mail'
    );
  });
});
