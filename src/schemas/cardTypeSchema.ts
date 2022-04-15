import joi from 'joi'

export const typeCardSchema = joi.string().valid(
    "groceries"
    , "restaurant"
    , "transport"
    , "education"
    , "health")
