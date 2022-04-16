import { Request, Response } from "express";
import * as rechargeServices from '../services/rechargeServices.js'

export async function create(req: Request, res: Response) {
   const { cardId, amount } = req.body
   if (!cardId || !amount) {
    return res.sendStatus(422);
    }

   rechargeServices.create(cardId, amount)
   res.sendStatus(201)
}