/// <reference types="cypress" />
//import alteraCampResultFixtures from '../fixtures/alteracampresult.json'
import validarsistadminschema from '../contracts/validarsistadmin.contracts'
import validarSistAdminResultFixtures from '../fixtures/validarsistadminresult.json'
//import validarsistadminschema from '../contracts/validarsistadmin.contracts'
//import { result } from 'cypress/types/lodash';

context('Micro serviço de campanha', () => {
    beforeEach(() => {
    });
    it('Validar Health Check fc-ms-admin', function() {
        cy.ValidarHcAdmin().then(response => {
            expect(response.body.data.adminSystemInfo.name).to.eq(validarSistAdminResultFixtures.validacaoservico.data.adminSystemInfo.name)
            expect(response.body.data.adminSystemInfo.version).to.eq(validarSistAdminResultFixtures.validacaoservico.data.adminSystemInfo.version)
            validarsistadminschema.validateAsync(response.body)
        })
    });
});
