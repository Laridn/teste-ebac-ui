/// <reference types="cypress" />
import EnderecoPage from '../support/pages-objects/endereco.page';
const dadosEndereco = require('../fixtures/endereco.json');

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta');
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha);
    });
  });
  it('Deve fazer cadastro de funcionamento com sucesso', () => {
    EnderecoPage.editarEnderecoFaturamento(
      'Larissa',
      'Nascimento',
      'Nubank',
      'Brasil',
      'Rua da Paz',
      '1001',
      'São Paulo',
      'São Paulo',
      '03974040',
      '11999999999',
      'teste@teste.com'
    );
    cy.get('.woocommerce-message').should(
      'contain',
      'Endereço alterado com sucesso.'
    );
  });
  it('Deve fazer cadastro de funcionamento com sucesso - Usando arquivos de dados', () => {
    EnderecoPage.editarEnderecoFaturamento(
      dadosEndereco[2].nome,
      dadosEndereco[2].sobrenome,
      dadosEndereco[2].empresa,
      dadosEndereco[2].pais,
      dadosEndereco[2].endereco,
      dadosEndereco[2].numero,
      dadosEndereco[2].cidade,
      dadosEndereco[2].estado,
      dadosEndereco[2].cep,
      dadosEndereco[2].telefone,
      dadosEndereco[2].email
    );
    cy.get('.woocommerce-message').should(
      'contain',
      'Endereço alterado com sucesso.'
    );
  });
});
