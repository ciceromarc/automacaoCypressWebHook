Cypress.Commands.add("AlterarCampanha", function (dataInicio, dataFim) {
    cy.request({
        method: "POST",
            url: Cypress.env("campanha") + "campaign",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: {
            "dataInicio": "2021-01-01",
            "dataFim": "2021-12-01"
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add("AlterarCampanhaComErroValorInteiro", function (dataInicio, dataFim) {
    cy.request({
        method: "POST",
            url: Cypress.env("campanha") + "campaign",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: {
            "dataInicio": 4654654,
            "dataFim": 5465464
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add("AlterarCampanhanull", function (dataInicio, dataFim) {
    cy.request({
        method: "POST",
            url: Cypress.env("campanha") + "campaign",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: {
            "dataInicio": null,
            "dataFim": null
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add("AlterarCampanhaSemParametro", function (dataInicio, dataFim) {
    cy.request({
        method: "POST",
            url: Cypress.env("campanha") + "campaign",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: { },
        failOnStatusCode: false
    })
})



Cypress.Commands.add("AlterarCampanhaComErroValorvazio", function (dataInicio, dataFim) {
    cy.request({
        method: "POST",
            url: Cypress.env("campanha") + "campaign",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: { 
            "dataInicio": "" ,
             "dataFim":  ""
        },
        failOnStatusCode: false
    })
})