Cypress.Commands.add("EnviaPostGraphql", function (queryString) {
   var queryString = '{getCityByName(name: "Sao Paulo"){country weather{summary{title description}temperature{actual feelsLike min max } wind{speed} clouds{ all visibility humidity}}}}'  
   cy.request({
        method: "POST",
            url: Cypress.env("weather"),
        body: {"query":"mutation createGroup($createGroupInput: CreateGroupInput!) {n createGroup(createGroupInput: $createGroupInput) {n idn valuen slug n }n}","variables":{"createGroupInput":{"value":"Dias das bruxas"}}}
    })
})