/// <reference types="cypress" />

import dadosWebhookSellerFixture from '../fixtures/dadosWebhookSeller.json'
import webhookSellerSchema from '../contracts/webhookseller.contracts'

context('Webhook de Seller', () => {
   
    it('Webhook - Seller', function () {
        cy.EnviaSeller().then((response) => {
            console.log(response)
         //   expect(response.status).to.equal(dadosWebhookSellerFixture.codigoHealthCheck)
          //  expect(response.body.IsValid).to.equal(dadosWebhookSellerFixture.validacao.IsValid)
           // expect(response.body.StatusCode).to.equal(dadosWebhookSellerFixture.validacao.StatusCode)  
          //  webhookSellerSchema.validateAsync(response.body)
             
        })
    })
})