"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
const newUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Novo usuário',
        body
    });
};
exports.newUser = newUser;
const loginUser = (req, res) => {
    console.log(req.body);
    const { body } = req;
    res.json({
        msg: 'Login usuário',
        body
    });
};
exports.loginUser = loginUser;
