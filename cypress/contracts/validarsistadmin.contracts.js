//import { clamp } from 'cypress/types/lodash'
import Joi from 'joi'

const validarsistadminschema = Joi.object({
    "data": Joi.object({
      "adminSystemInfo": Joi.object({
        "name": Joi.string(),
        "version": Joi.string()
    })
    })
  })
  export default validarsistadminschema