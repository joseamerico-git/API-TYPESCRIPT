import {Router} from  'express';
import { getProdutos, getProdutosPublics } from '../controllers/produto';
import validateToken from './validate-token';

const router = Router();

router.get('/',validateToken,getProdutos)
router.get('/',getProdutosPublics)
export default router;