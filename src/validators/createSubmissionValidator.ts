import {NextFunction,Request,Response } from "express";
import { ZodSchema } from "zod";

import { createSubissionDto } from "../dtos/createSubmissionDto";

export const validateCreateSubmissionDto=(schema:ZodSchema<createSubissionDto>)=>
    (req:Request,res:Response,next:NextFunction)=>
        {
try {
    schema.parse({...req.body});
    next();
} catch (error) {
    console.log('error while validating',error);
    return res.status(400).json({
        message:'Bad request'
    });
}
};