import { Request, Response } from "express";
import * as cardServices from '../services/cardsServices.js'

export async function create(req: Request, res: Response) {
    const {idEmployee, cardType } = req.body

    if (!cardType || !idEmployee) {
        return res.sendStatus(422);
    }

    await cardServices.create(idEmployee, cardType)

    return res.sendStatus(201)
}