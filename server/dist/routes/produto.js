"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produto_1 = require("../controllers/produto");
const router = (0, express_1.Router)();
router.get('/', produto_1.getProdutos);
exports.default = router;
