/// <reference types="cypress" />

import dadosServerestFixtures from '../fixtures/dadosServerest.json'
import ServerestSchema from '../contracts/serverest.contracts'

context('Exemplo Serverest', () => {
   
    it('Exemplo1 Serverest', function () {
        cy.EnviaGetServerest().then((response) => {
            console.log(response)
          expect(response.status).to.equal(dadosServerestFixtures.codigoHealthCheck)
          expect(response.body.nome).to.equal(dadosServerestFixtures.validacao.usuarios[0].nome)
          expect(response.body.email).to.equal(dadosServerestFixtures.validacao.usuarios[0].email)
          expect(response.body.password).to.equal(dadosServerestFixtures.validacao.usuarios[0].password)
         
             
        })
    })
})