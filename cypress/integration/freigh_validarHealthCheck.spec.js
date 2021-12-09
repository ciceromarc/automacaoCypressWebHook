/// <reference types="cypress" />
import validarsistFreightResultFixtures from '../fixtures/validarsistFreightResult.json'
import validarsistfreightschema from '../contracts/validarsistfreight.contracts'
//import { result } from 'cypress/types/lodash';

context('Micro serviço de frete', () => {
    beforeEach(() => {
    });
    it('Validar Health Check fc-ms-freight', function() {
        cy.ValidarHcFreight().then(response => {
            expect(response.body.data.freightSystemInfo.name).to.eq(validarsistFreightResultFixtures.validacaoservicofreight.data.freightSystemInfo.name)
            expect(response.body.data.freightSystemInfo.version).to.eq(validarsistFreightResultFixtures.validacaoservicofreight.data.freightSystemInfo.version)
        })
    });

})
