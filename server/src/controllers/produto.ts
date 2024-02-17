import {Request, Response} from 'express';
import { Produto } from '../models/produtos';

export const getProdutos = async (req: Request,res:Response) => {
 
  const listProdutos = await Produto.findAll();
  res.json({
    listProdutos
  })
}