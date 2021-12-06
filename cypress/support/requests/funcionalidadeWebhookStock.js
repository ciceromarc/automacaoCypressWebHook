Cypress.Commands.add("EnviaStock", function () {
    cy.request({
        method: "POST",
            url: Cypress.env("urlstock") + "stock",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: {
            "CorrelationId": "8e2df6f8-7ae9-44c6-bdb2-259d84545ab9",
            "Topic": null,
            "Key": null,
            "Bandeira": "PontoFrio",
            "Token": null,
            "TimeStamp": "2020-08-15T12:32:14.16-03:00",
            "Message": {
                "Content": "{\"Estoques\":[{\"IdSku\":12,\"IdLojista\":123,\"FlagSkuSaldoDisponivel\":false,\"SaldoEstoque\":5,\"\":\"2020-08-15T12:30:00.173\",\"FlagAtiva\":true}]}"
            }
        },
        failOnStatusCode: false
    })
})