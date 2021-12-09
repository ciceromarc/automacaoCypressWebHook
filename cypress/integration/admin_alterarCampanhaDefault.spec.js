/// <reference types="cypress" />
import alteraCampResultFixtures from '../fixtures/alteracampresult.json'
import alterarCampContractsSchema from '../contracts/alterarcamp.contracts'

context('Alterar campanha default', () => {
  beforeEach(() => {
  });
  it('Alterar campanha default', function() {
     cy.ValidarCampanhaDefault().then(response => {
     expect(response.body.data.setDefaultCampaign.campaignId).to.eq(alteraCampResultFixtures.validacao.data.setDefaultCampaign.campaignId)
     expect(response.body.data.setDefaultCampaign.isDefault).to.eq(alteraCampResultFixtures.validacao.data.setDefaultCampaign.isDefault)
     expect(response.body.data.setDefaultCampaign.campaignId).to.not.eq(alteraCampResultFixtures.validacao.data.setDefaultCampaign.campaignIdError)
      alterarCampContractsSchema.validateAsync(response.body)
    })
  });
})
