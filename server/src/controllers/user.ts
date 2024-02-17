import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/users';
export const newUser = async(req:Request, res:Response) =>{
    
    const {username,password} = req.body;
    console.log(username),
    console.log(password)

   const hashPassword = await bcrypt.hash(password,10)
   
   await User.create({
        username:username,
        password:password

   })

    res.json({
        msg:`Usuário ${username} criado com sucesso!`
        
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