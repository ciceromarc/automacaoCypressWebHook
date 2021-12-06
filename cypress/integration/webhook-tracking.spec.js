/// <reference types="cypress" />

import dadosWebhookTrackingFixture from '../fixtures/dadosWebhooktracking.json'
//import webhookTrackingSchema from '../contracts/webhookTracking.contracts'

context('Webhook de Tracking', () => {
   
    it('Webhook - Tracking', function () {
        cy.EnviaTracking().then((response) => {
            console.log(response)
        /   expect(response.status).to.equal(dadosWebhookTrackingFixture.codigoHealthCheck)
        //    expect(response.body.IsValid).to.equal(dadosWebhookStockFixture.validacao.IsValid)
        //    expect(response.body.StatusCode).to.equal(dadosWebhookStockFixture.validacao.StatusCode)  
          //  webhookStockSchema.validateAsync(response.body)
             
        })
    })
})