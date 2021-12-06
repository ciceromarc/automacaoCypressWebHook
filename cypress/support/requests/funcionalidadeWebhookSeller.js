Cypress.Commands.add("EnviaSeller", function () {
    cy.request({
        method: "POST",
            url: Cypress.env("urlseller") + "seller",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: {
            "CorrelationId": "4f4757ab-d490-445a-a837-023bc1dfe91b",
            "Topic": null,
            "Key": null,
            "Bandeira": "CasasBahia",
            "Token": null,
            "TimeStamp": "2020-08-13T15:18:24.589-03:00",
            "Message": {
                "Content": "{\"Lojistas\":[{\"Codigo\":666,\"NomeLojista\":\"Via Test 10\"}]}"
            }
        },
        failOnStatusCode: false
    })
})