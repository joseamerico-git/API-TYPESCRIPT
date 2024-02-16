import {Router} from  'express';
import { getProdutos } from '../controllers/produto';

const router = Router();

router.get('/',getProdutos)
export default router;