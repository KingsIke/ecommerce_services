import JWT from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "./error-hander";

const tokens: string[] = [
    "auth",
    "seller",
    "gig",
    "search",
    "buyer",
    "message",
    "order",
    "review"
]

export const verifyGatewayRequest = async (req:Request, res:Response, next: NextFunction): Promise<void>=> {

    if(!req.headers?.gatewayToken){
        throw new NotAuthorizedError("Invalid request", 'verify request is wrong')
    }
    const token: string = req.headers?.gatewayToken as string

    if(!token){
        throw new NotAuthorizedError("Invalid request", 'verify request is wrong')
    }

    try {
        const payload: {id: string, iat: number} = JWT.verify(token, "") as {id: string, iat: number};

        if(!token.includes(payload.id)){
        throw new NotAuthorizedError("Invalid request", 'verify request is wrong')

        }
    } catch (error) {
        console.log("Eroor message", error)
        throw new NotAuthorizedError("Invalid request", 'verify request is wrong') 
    }
}