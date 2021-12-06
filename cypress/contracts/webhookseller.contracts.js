import Joi from 'joi'

const webhookSellerSchema = Joi.object({
    "IsValid": Joi.boolean(),
    "StatusCode": Joi.number()
})

export default webhookSellerSchema