import { NextFunction, Request, Response } from "express";

export function validateCardTypeMiddleware(schema: any) {
    return (req: Request, res: Response, next: NextFunction) =>{
        const validation = schema.validate(req.body.cardType)
        
        if (validation.error) {
            
            return res.sendStatus(422);
        }
        next();
    }
    
}