//import { clamp } from 'cypress/types/lodash'
import Joi from 'joi'

const validarsistpriceschema = Joi.object({
    "data": Joi.object({
        "priceSystemInfo": Joi.object({
            "name": Joi.string(),
            "version": Joi.string()
        })
    })
})
export default validarsistpriceschema