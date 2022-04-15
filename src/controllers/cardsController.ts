import { Request, Response } from "express";
import * as cardServices from '../services/cardsServices.js'

export async function create(req: Request, res: Response) {
    const {employeeId, type } = req.body

    if (!type || !employeeId) {
        return res.sendStatus(422);
    }

    const data = await cardServices.create(employeeId, type)
   

    return res.sendStatus(201)
}