import express, {Application} from 'express';
import routesProduto from '../routes/produto'
import routesUser from '../routes/user'

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
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Aplicação rodando na porta ' + this.port);
        })
    }

    routes(){
        this.app.use('/api/produtos',routesProduto)
        this.app.use('/api/users',routesUser)
    }
   
    midlewares(){
        this.app.use(express.json());
    }

    async dbConnection(){
        try {
            
        } catch (error) {
            console.log("Não houve conexão com o banco de dados!")
        }
    }
}
export default Server;