Cypress.Commands.add("EnviaPostGraphql", function (queryString) {
   var queryString = '{"query":"mutation createGroup($createGroupInput: CreateGroupInput!) {n createGroup(createGroupInput: $createGroupInput) {n idn valuen slug n }n}","variables":{"createGroupInput":{"value":"Dias das bruxas"}}}'  
   cy.request({
        method: "POST",
            url: Cypress.env("weather"),
        body: {
                query: queryString
        },

    })
})