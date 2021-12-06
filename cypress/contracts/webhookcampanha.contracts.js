import Joi from 'joi'

const webhookCampanhaMetodoPagamentoSchema = Joi.object({
    "IsValid": Joi.boolean(),
    "StatusCode": Joi.number(),
    "Messages": Joi.array().items(Joi.object({
            "Code": Joi.number(),
            "Content": Joi.array().items(Joi.string()),
            "Type": Joi.string(),
    })),
})

export default webhookCampanhaMetodoPagamentoSchema