/// <reference types="cypress" />
import validarsiststockresultResultFixtures from '../fixtures/validarsiststockresult.json'
import validarsiststockschema from '../contracts/validarsiststock.contracts'
//import { result } from 'cypress/types/lodash';

context('Micro serviço de Stock', () => {
    beforeEach(() => {
    });
    it('Validar Health Check fc-ms-stock', function() {
        cy.ValidarHcStock().then(response => {
            expect(response.body.data.stockSystemInfo.name).to.eq(validarsiststockresultResultFixtures.validacaoservicostock.data.stockSystemInfo.name)
            expect(response.body.data.stockSystemInfo.version).to.eq(validarsiststockresultResultFixtures.validacaoservicostock.data.stockSystemInfo.version)
        })
    });

})
