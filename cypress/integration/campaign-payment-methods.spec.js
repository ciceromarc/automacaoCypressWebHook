/// <reference types="cypress" />

import segurancaWebhookFixture from '../fixtures/funcionalidadesWebhookCampanha.json'

import webhookcampanhaMetodoSchema from '../contracts/webhookcampanha.contracts'

context('Webhook de payment Methods', () => {
    beforeEach(() => {
        cy.fixture("funcionalidadesWebhookCampanha").as("funcionalidadesWebhookCampanha")

    })

    it('Webhook - Envia Meio de Pagamento', function () {
        cy.EnviaMeioPagamento().then((response) => {
            console.log(response)
            expect(response.status).not.to.equal(this.funcionalidadesWebhookCampanha.codigoHealthCheck)
            webhookcampanhaMetodoSchema.validateAsync(response.body)
                this.funcionalidadesWebhookCampanha.validacao.IsValid,
                this.funcionalidadesWebhookCampanha.validacao.StatusCode,
                this.funcionalidadesWebhookCampanha.validacao.Messages,
                expect(response.body.IsValid).to.eq(this.funcionalidadesWebhookCampanha.validacao.IsValid)
                expect(response.body.StatusCode).to.eq(this.funcionalidadesWebhookCampanha.validacao.StatusCode)
                expect(response.body.Messages[0].Code).to.eq(this.funcionalidadesWebhookCampanha.validacao.Messages[0].Code)
                expect(response.body.Messages[0].Content[0]).to.contain(this.funcionalidadesWebhookCampanha.validacao.Messages[0].Content[0])
                expect(response.body.Messages[0].Content[1]).to.eq(this.funcionalidadesWebhookCampanha.validacao.Messages[0].Content[1])
                expect(response.body.Messages[0].Content[2]).to.eq(this.funcionalidadesWebhookCampanha.validacao.Messages[0].Content[2])
                expect(response.body.Messages[0].Type).to.eq(this.funcionalidadesWebhookCampanha.validacao.Messages[0].Type)    
        })
    })
})