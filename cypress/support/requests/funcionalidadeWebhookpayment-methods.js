Cypress.Commands.add("EnviaMeioPagamento", function () {
    cy.request({
        method: "POST",
            url: Cypress.env("pagamento") + "campaign-payment-methods",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: {
            
         },
        failOnStatusCode: false
    })
})
