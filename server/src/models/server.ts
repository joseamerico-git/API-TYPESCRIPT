import express, {Application} from 'express';
import cors from 'cors';
import routesProduto from '../routes/produto'
import routesUser from '../routes/user'

import { Produto } from './produtos';
import { User } from './users';
import { getProdutosPublics } from '../controllers/produto';


class Server{
    private app: Application;
    private port: string;
   

    constructor(){
        this.app = express();
        this.port = process.env.POR || '3001';
        console.log("Estou no construtor da classe Server.")
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnection();
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Aplicação rodando na porta ' + this.port);
        })
    }

    routes(){
        this.app.use('/api/produtos',routesProduto)
        this.app.use('/api/produtos/view',getProdutosPublics)
        this.app.use('/api/users',routesUser)
    }
   
    midlewares(){

        // Parseo body

        this.app.use(express.json());

        // Cors
        this.app.use(cors());

    }

    async dbConnection(){
        try {
            Produto.sync();
            User.sync();
           
            
        } catch (error) {
            console.log("Não houve conexão com o banco de dados!", error)
        }
    }
}
export default Server;