import {Router} from  'express';
import { getProdutos } from '../controllers/produto';
import validateToken from './validate-token';

const router = Router();

router.get('/',validateToken,getProdutos)
export default router;