Cypress.Commands.add("EnviaGetServerest", function () {
    cy.request({
        method: "GET",
            url: Cypress.env("serverest") + "0uxuPY0cbmQhpEz1",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: {
            "quantidade": 1,
            "usuarios": [
              {
                "nome": "Fulano da Silva",
                "email": "beltrano@qa.com.br",
                "password": "teste",
                "administrador": "true",
                "_id": "0uxuPY0cbmQhpEz1"
              }
            ]
          },
        failOnStatusCode: false
    })
})