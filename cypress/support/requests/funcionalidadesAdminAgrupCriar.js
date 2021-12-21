function gera_random(n) {
    const ranNum = Math.round(Math.random() * 2);
    return ranNum;
}

Cypress.Commands.add("CriarAgrupamentoAdmin", function () {

    var createGroup = `mutation{
        insertAdminFilterGroup(adminFilterGroup:{
          value: "Grupo teste 19", 
          slug: "grupo-teste-19"
        }){
          id
          insertedAt
          slug
          updatedAt
          value
        }
      }`
    cy.request({
        method: 'POST',
        url: Cypress.env("UrlAdmin"),
        failOnStatusCode: false,
        body: {
            query: createGroup
        },
        headers: {
            'authentication': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwYmFjMzdlNS1iZjhkLTRhYjgtYWQ4Mi1iZTYzMzY5Nzc3ZTQiLCJhdWQiOiIwYjI2ZjEwZi01YjMxLTQ4NjQtYWJmNC02MGFkNmYyNmU1MTUiLCJpYXQiOjE1MTYyMzkwMjIsInVpdCI6IkNVU1RPTUVSIiwianRpIjoiOWJkOWY5N2ItYzlhOS00ZmU4LWE3YjItZmQ4Mjk4Y2NlNDk0In0.DXhLT86GfoPTFlxCgG9U8sscJ_tjw1Y-LCyYm6nDCUA'
        }
    })
})

Cypress.Commands.add("AlterarAgrupamentoAdmin", function (id, value) {

    var updateGroup = `mutation{
        updateAdminFilterGroup(id: `+ id +`,
          adminFilterGroup: {value: +value+gera_random(9)})
        {
        id
        insertedAt
        slug
        updatedAt
        value
        )}
        }`
    cy.request({
        method: 'POST',
        url: Cypress.env("UrlAdmin"),
        failOnStatusCode: false,
        body: {
            query: updateGroup
        
        },
        headers: {
            'authentication': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwYmFjMzdlNS1iZjhkLTRhYjgtYWQ4Mi1iZTYzMzY5Nzc3ZTQiLCJhdWQiOiIwYjI2ZjEwZi01YjMxLTQ4NjQtYWJmNC02MGFkNmYyNmU1MTUiLCJpYXQiOjE1MTYyMzkwMjIsInVpdCI6IkNVU1RPTUVSIiwianRpIjoiOWJkOWY5N2ItYzlhOS00ZmU4LWE3YjItZmQ4Mjk4Y2NlNDk0In0.DXhLT86GfoPTFlxCgG9U8sscJ_tjw1Y-LCyYm6nDCUA'
        }
    })
})