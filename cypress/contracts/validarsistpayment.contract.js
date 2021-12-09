//import { clamp } from 'cypress/types/lodash'
import Joi from 'joi'

const validarsistpaymentschema = Joi.object({
    "data": Joi.object({
      "paymentSystemInfo": Joi.object({
        "name": Joi.string(),
        "version": Joi.string()
    })
    })
  })
  export default validarsistpaymentschema