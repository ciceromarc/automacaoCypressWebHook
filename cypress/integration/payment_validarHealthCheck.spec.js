/// <reference types="cypress" />
import validarSistPaymentResultFixtures from '../fixtures/validarsistpaymentresult.json'
import validarsistpaymentschema from '../contracts/validarsistpayment.contract'
//import { result } from 'cypress/types/lodash';

context('Micro serviço de Pagamento', () => {
    beforeEach(() => {
    });
    it('Validar Health Check fc-ms-payment', function() {
        cy.ValidarHcPayment().then(response => {
            expect(response.body.data.paymentSystemInfo.name).to.eq(validarSistPaymentResultFixtures.validacaoservicopayment.data.paymentSystemInfo.name)
            expect(response.body.data.paymentSystemInfo.version).to.eq(validarSistPaymentResultFixtures.validacaoservicopayment.data.paymentSystemInfo.version)
        })
    });

})
