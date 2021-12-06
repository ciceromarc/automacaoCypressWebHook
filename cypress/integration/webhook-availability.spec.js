/// <reference types="cypress" />

import segurancaWebhookFixture from '../fixtures/dadosValidacaoWebhookavailability.json'

//import webhookcampanhaMetodoSchema from '../contracts/webhookcampanha.contracts'

context('Webhook de Availability', () => {
    beforeEach(() => {
        cy.fixture("dadosValidacaoWebhookavailability").as("dadosValidacaoWebhookavailability")

    })
    it('Webhook - Availability', function () {
        cy.EnviaAvailability().then((response) => {
            console.log(response)
            expect(response.status).to.equal(segurancaWebhookFixture.codigoHealthCheck)
            //webhookcampanhaMetodoSchema.validateAsync(response.body)
             
        })
    })
})