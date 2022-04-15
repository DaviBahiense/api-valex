import {Router} from 'express'
import * as cardsController from '../controllers/cardsController.js'
import { validadeCompanyMiddleware }from '../middlewares/validateCompany.js'
import { validateCardTypeMiddleware } from '../middlewares/validateCardType.js';
import { typeCardSchema } from '../schemas/cardTypeSchema.js'

const cardRouter = Router();
cardRouter.post('/create', 
    validadeCompanyMiddleware,
    validateCardTypeMiddleware(typeCardSchema),
    cardsController.create    
)
export default cardRouter