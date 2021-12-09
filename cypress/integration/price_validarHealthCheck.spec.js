/// <reference types="cypress" />
import validarSistPriceResultFixtures from '../fixtures/validarsistpriceresult.json'
import validarsistpriceschema from '../contracts/validarsistprice.contracts'
//import { result } from 'cypress/types/lodash';

context('Micro serviço de Preço', () => {
    beforeEach(() => {
    });
    it('Validar Health Check fc-ms-price', function() {
        cy.ValidarHcPrice().then(response => {
            expect(response.body.data.priceSystemInfo.name).to.eq(validarSistPriceResultFixtures.validacaoservicoprice.data.priceSystemInfo.name)
            expect(response.body.data.priceSystemInfo.version).to.eq(validarSistPriceResultFixtures.validacaoservicoprice.data.priceSystemInfo.version)
        })
    });

})
