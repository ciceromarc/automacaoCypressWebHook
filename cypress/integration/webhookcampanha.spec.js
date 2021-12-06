/// <reference types="cypress" />

import segurancaWebhookFixture from '../fixtures/funcionalidadesWebhookCampanha.json'

context('Webhook de Campanha', () => {
    beforeEach(() => {
        cy.fixture("funcionalidadesWebhookCampanha").as("funcionalidadesWebhookCampanha")

    })

    it('Alterar Campanha Webhook', function () {
        cy.AlterarCampanha().then((response) => {
            console.log(response);
            expect(response.status).not.to.equal(this.funcionalidadesWebhookCampanha.codigoHealthCheck)
        })
    })

    it('Alterar Campanha Webhook Com Erro Valor Inteiro', function () {
        cy.AlterarCampanhaComErroValorInteiro().then((response) => {
            console.log(response);
            expect(response.status).to.equal(this.funcionalidadesWebhookCampanha.codigoHealthCheck400)
        })
    })


    it('Alterar Campanha Webhook Com Erro Valor Vazio', function () {
        cy.AlterarCampanhaComErroValorvazio().then((response) => {
            console.log(response);
            expect(response.status).not.to.equal(this.funcionalidadesWebhookCampanha.codigoHealthCheck)
        })
    })

    it('Alterar Campanha Webhook sem parametro', function () {
        cy.AlterarCampanhaSemParametro().then((response) => {
            console.log(response);
            expect(response.status).not.to.equal(this.funcionalidadesWebhookCampanha.codigoHealthCheck)
        })
    })

    

    it('Alterar Campanha Webhook null', function () {
        cy.AlterarCampanhanull().then((response) => {
            console.log(response);
            expect(response.status).not.to.equal(this.funcionalidadesWebhookCampanha.codigoHealthCheck)
        })
    })

})