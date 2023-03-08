/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json');

context('Funcionalidade Login', () => {
  beforeEach(() => {
    cy.visit('minha-conta');
  });
  afterEach(() => {
    cy.screenshot();
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com');
    cy.get('#password').type('teste@teste.com');
    cy.get('.woocommerce-form > .button').click();
    cy.get('.page-title').should('contain', 'Minha conta');
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
      'contain',
      'Olá, Jenkins'
    );
  });

  it('Deve fazer login com sucesso - Usando arquivos de dados', () => {
    cy.get('#username').type(perfil.usuario);
    cy.get('#password').type(perfil.senha);
    cy.get('.woocommerce-form > .button').click();
    cy.get('.page-title').should('contain', 'Minha conta');
  });

  it('Deve fazer login com sucesso - Usando fitxure', () => {
    cy.fixture('perfil').then(dados => {
      cy.get('#username').type(dados.usuario);
      cy.get('#password').type(dados.senha, { log: false });
      cy.get('.woocommerce-form > .button').click();
      cy.get('.page-title').should('contain', 'Minha conta');
    });
  });

  it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('larissa@teste.com');
    cy.get('#password').type('teste@teste.com');
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-error > li').should(
      'contain',
      'Endereço de e-mail desconhecido'
    );
  });
  it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('aluno@teste.com');
    cy.get('#password').type('teste@teste');
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-error > li').should(
      'contain',
      'Erro: a senha fornecida para o e-mail'
    );
  });
});
