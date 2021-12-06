/// <reference types="cypress" />

context('Graphql ', () => {
    it('Consulta Tempo Graphql', function () {
        cy.EnviaPostGraphql().then((response) => {
            console.log(response.body);
      })
    })
})