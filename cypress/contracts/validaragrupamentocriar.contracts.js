//import { clamp } from 'cypress/types/lodash'
import Joi from 'joi'

const creategroupSchema = Joi.object({
    "data": Joi.object({
      "insertAdminFilterGroup": Joi.object({
        "id": Joi.string(),
        "insertedAt": Joi.string(),
        "updatedAt": Joi.string(),
        "value": Joi.string(),
        "slug": Joi.string()
    })
    })
  })
  export default creategroupSchema