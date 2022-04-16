import { Request, Response } from "express";
import * as paymentServices from '../services/paymentServices.js'

export async function create(req: Request, res: Response) {
    const { cardId, businessId, password, amount } = req.body
    if (!businessId || !cardId || !password || !amount) {
        return res.sendStatus(422);
    }

    await paymentServices.create(cardId, businessId, password, amount)
    return res.sendStatus(201)
}