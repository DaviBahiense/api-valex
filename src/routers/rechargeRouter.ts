import {Router} from 'express'
import { create } from '../controllers/rechargeController.js';
import { validadeCompanyMiddleware }from '../middlewares/validateCompany.js'

const rechargeRouter = Router();

rechargeRouter.post('/recharge', validadeCompanyMiddleware, create)

export default rechargeRouter