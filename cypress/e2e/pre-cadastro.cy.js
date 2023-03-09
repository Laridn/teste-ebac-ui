/// <reference types="cypress" />
var faker = require('faker');
const Faker = require('faker/lib');
describe('Funcionalidade Pré-Cadastro', () => {
  beforeEach(() => {
    cy.visit('minha-conta');
  });

  it('Deve completar o Pré-Cadastro com sucesso', () => {
    let nomeFaker = faker.name.firstName();
    let sobrenomeFaker = faker.name.lastName();
    let emailFaker = faker.internet.email();
    cy.get('#reg_email').type(emailFaker);
    cy.get('#reg_password').type('Teste@teste.com');
    cy.get(':nth-child(4) > .button').click();
    cy.get('.page-title').should('contain', 'Minha conta');
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
    cy.get('#account_first_name').type(nomeFaker);
    cy.get('#account_last_name').type(sobrenomeFaker);
    cy.get('.woocommerce-Button').click();
    cy.get('.woocommerce-message').should(
      'contain',
      'Detalhes da conta modificados com sucesso.'
    );
  });

  it('Deve completar o pré-cadastro com sucesso usando Comandos Customizados', () => {
    let emailFaker = faker.internet.email();
    cy.preCadastro(emailFaker, 'Senha@forte123', 'Larissa', 'Nascimento');
    cy.get('.woocommerce-message').should(
      'contain',
      'Detalhes da conta modificados com sucesso.'
    );
  });
});
