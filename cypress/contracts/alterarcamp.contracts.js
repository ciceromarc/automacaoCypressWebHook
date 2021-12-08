//import { clamp } from 'cypress/types/lodash'
import Joi from 'joi'

const alterarCampschema = Joi.object({
    "data": Joi.object({
      "setDefaultCampaign": Joi.object({
        "campaignId": Joi.string(),
        "isDefault": Joi.boolean()
    })
    })
  })
  export default alterarCampschema