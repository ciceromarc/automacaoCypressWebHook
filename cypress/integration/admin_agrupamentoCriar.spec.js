/// <reference types="cypress" />

import validaragrupamentocriarschema from '../contracts/validaragrupamentocriar.contracts'
import validaragrupamentocriarresultFixtures from '../fixtures/validaragrupamentocriarresult.json'
var id = ''
var value = ''

context('Agrupamentos no Admin', () => {
    beforeEach(() => {
    });
    it('Criar agrupamento', function () {

        cy.CriarAgrupamentoAdmin().then(response => {
            //expect(response.body.data.createGroup.value).to.eq(validaragrupamentocriarresultFixtures.validacaocriaragrupamento.data.createGroup.value)
            //expect(response.body.data.createGroup.slug).to.eq(validaragrupamentocriarresultFixtures.validacaocriaragrupamento.data.createGroup.slug)
            id = (response.body.data.createGroup.id)
            value = (response.body.data.createGroup.value)
            cy.log(id)
            //validarsistadminschema.validateAsync(response.body)
        })
    });

    it('Alterar agrupamento', function () {
        cy.AlterarAgrupamentoAdmin(id, value).then(response => {
        expect(response.body.data.updateGroup.id).to.equal(id)
        })

    });
});
