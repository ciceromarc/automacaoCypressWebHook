/// <reference types="cypress" />
import validarSistOrderResultFixtures from '../fixtures/validarsistorderresult.json'
import validarsistorderschema from '../contracts/validarsistorder.contracts'
//import { result } from 'cypress/types/lodash';

context('Micro serviço de Pedidos', () => {
    beforeEach(() => {
    });
    it('Validar Health Check fc-ms-order', function() {
            cy.ValidarHcOrder().then(response => {
            expect(response.body.data.orderSystemInfo.name).to.eq(validarSistOrderResultFixtures.validacaoservicoorder.data.orderSystemInfo.name)
            expect(response.body.data.orderSystemInfo.version).to.eq(validarSistOrderResultFixtures.validacaoservicoorder.data.orderSystemInfo.version)
        })
    });

})
