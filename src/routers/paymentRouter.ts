import {Router} from 'express'
import * as paymentController from '../controllers/paymentController.js'

const paymentRouter = Router();
paymentRouter.post('/payment', paymentController.create )

export default paymentRouter