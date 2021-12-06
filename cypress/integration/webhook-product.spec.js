/// <reference types="cypress" />

import dadosWebhookProductFixture from '../fixtures/dadosWebhookproduct.json'
//import webhookproductSchema from '../contracts/webhookProduct.contracts'

context('Webhook de Product', () => {
   
    it('Webhook - Product', function () {
        cy.EnviaProduct().then((response) => {
            console.log(response)
         /   expect(response.status).to.equal(dadosWebhookProductFixture.codigoHealthCheck)
        //    expect(response.body.IsValid).to.equal(dadosWebhookProductFixture.validacao.IsValid)
        //    expect(response.body.StatusCode).to.equal(dadosWebhookProductFixture.validacao.StatusCode)  
          //  webhookStockSchema.validateAsync(response.body)
             
        })
    })
})