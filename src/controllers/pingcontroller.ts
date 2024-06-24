import { Request,Response } from "express";

function pingcontroller (_:Request,res:Response){

    res.status(200).json({
        message:'Controller is up'
    });
}

export default pingcontroller;