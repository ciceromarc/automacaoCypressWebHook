Cypress.Commands.add("EnviaCategory", function () {
    cy.request({
        method: "POST",
            url: Cypress.env("category") + "category",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: {
            "CorrelationId": "0ab467c3-e7dd-46e1-976d-8948a7fbe68f",
            "Topic":null,
            "Key":null,
            "Bandeira": "CasasBahia",
            "Token":null,
            "TimeStamp":"2020-08-13T15:21:07.093-03:00",
            "Message":{
                "Content":"{\"Categorias\":[{\"Codigo\":70,\"IdDepartamento\":null,\"NomeDepartamento\":\"departamento 1\",\"Level\":1,\"Nome\":\"Mamãe e bebê\"}]}"
            }
            },
        failOnStatusCode: false
    })
})