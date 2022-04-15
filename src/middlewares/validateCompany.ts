import { findByApiKey } from "../repositories/companyRepository.js";
import { Request, Response, NextFunction } from "express";

export async function validadeCompanyMiddleware(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers["x-api-key"] as string

    const company = await findByApiKey(apiKey)
    if (!company) {
        return res.sendStatus(404)        
    }
    next()
}