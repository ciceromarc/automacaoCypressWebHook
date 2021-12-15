//import { clamp } from 'cypress/types/lodash'
import Joi from 'joi'

const creategroupSchema = Joi.object({
    "data": Joi.object({
      "creategroup": Joi.object({
        "id": Joi.string(),
        "value": Joi.string(),
        "slug": Joi.string()
    })
    })
  })
  export default creategroupSchema