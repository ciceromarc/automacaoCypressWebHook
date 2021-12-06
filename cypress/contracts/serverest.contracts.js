import Joi from 'joi'

const ServerestSchema = Joi.object({
    "nome": Joi.string(),
    "email": Joi.string(),
    "password": Joi.string(),
    "administrador": Joi.string(),
    "_id": Joi.string()
})

export default ServerestSchema