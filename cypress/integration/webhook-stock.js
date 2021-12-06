/// <reference types="cypress" />

import dadosWebhookStockFixture from '../fixtures/dadosWebhookStock.json'
//import webhookStockSchema from '../contracts/webhookstock.contracts'

context('Webhook de Stock', () => {
   
    it('Webhook - Stock', function () {
        cy.EnviaStock().then((response) => {
            console.log(response)
         /   expect(response.status).to.equal(dadosWebhookStockFixture.codigoHealthCheck)
        //    expect(response.body.IsValid).to.equal(dadosWebhookStockFixture.validacao.IsValid)
        //    expect(response.body.StatusCode).to.equal(dadosWebhookStockFixture.validacao.StatusCode)  
          //  webhookStockSchema.validateAsync(response.body)
             
        })
    })
})