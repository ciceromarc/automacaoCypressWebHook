//import { clamp } from 'cypress/types/lodash'
import Joi from 'joi'

const validarsistorderschema = Joi.object({
    "data": Joi.object({
      "orderSystemInfo": Joi.object({
        "name": Joi.string(),
        "version": Joi.string()
    })
    })
  })
  export default validarsistorderschema