import {Request, Response} from 'express'

export const newUser = (req:Request, res:Response) =>{
    
    const {body} = req;

    res.json({
        msg:'Novo usuário',
        body
    })

}

export const loginUser = (req:Request, res:Response) =>{
    
    console.log(req.body)
    const {body} = req;
    res.json({
        msg:'Login usuário',
        body
    })

}