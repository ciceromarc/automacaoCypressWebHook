/// <reference types="cypress" />
import validarSistCatalogResultFixtures from '../fixtures/validarsistcatalogresult.json'
import validarsistcatalogschema from '../contracts/validarsistcatalog.contracts'


context('Alterar campanha default', () => {
    beforeEach(() => {
    });
    it('Validar Health Check fc-ms-catalog', function () {
        cy.ObterDetalhesProduto().then(response => {
            expect(response.body.data.catalogSystemInfo.name).to.eq(validarSistCatalogResultFixtures.validacaoservicocatalog.data.catalogSystemInfo.name)
            expect(response.body.data.catalogSystemInfo.version).to.eq(validarSistCatalogResultFixtures.validacaoservicocatalog.data.catalogSystemInfo.version)
        })
        
        
    });

})
