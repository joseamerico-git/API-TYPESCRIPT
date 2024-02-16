import {Request, Response} from 'express';
export const getProdutos = (req: Request,res:Response) => {
  res.json({
    msg: 'Get Produtos'
  })
}