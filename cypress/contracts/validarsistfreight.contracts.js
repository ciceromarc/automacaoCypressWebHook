//import { clamp } from 'cypress/types/lodash'
import Joi from 'joi'

const validarsistfreightschema = Joi.object({
    "data": Joi.object({
      "freightSystemInfo": Joi.object({
        "name": Joi.string(),
        "version": Joi.string()
    })
    })
  })
  export default validarsistfreightschema