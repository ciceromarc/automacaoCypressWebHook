/// <reference types="cypress" />

import categoryWebhookFixture from '../fixtures/dadosWebhookcategory.json'

//import webhookcategoryMetodoSchema from '../contracts/webhookcategory.contracts'

context('Webhook de Category', () => {
    beforeEach(() => {
        cy.fixture("dadosWebhookcategory").as("dadosWebhookcategory")

    })
    it('Webhook - Category', function () {
        cy.EnviaCategory().then((response) => {
            console.log(response)
            expect(response.status).to.equal(categoryWebhookFixture.codigoHealthCheck)
          //  webhookcategoryMetodoSchema.validateAsync(response.body)
             
        })
    })
})