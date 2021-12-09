//import { clamp } from 'cypress/types/lodash'
import Joi from 'joi'

const validarsistcatalogschema = Joi.object({
    "data": Joi.object({
      "catalogSystemInfo": Joi.object({
        "name": Joi.string(),
        "version": Joi.string()
    })
    })
  })
  export default validarsistcatalogschema