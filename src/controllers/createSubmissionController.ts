import { Request,Response } from "express";

import { createSubissionDto } from "../dtos/createSubmissionDto";

export default function createSubmission(req:Request,res:Response){
const submissiondto=req.body as createSubissionDto;

return res.status(201).json({
    success:true,
    message:'Successfully submitted problem',
    error:{},
    data:submissiondto
});
}