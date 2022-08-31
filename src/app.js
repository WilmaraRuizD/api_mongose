import express from 'express';
import * as dotenv from 'dotenv';
import tasksRouter from "./routes/tasks.routes.js";
import morgan from 'morgan';
import cors from 'cors'
//inicialización :

const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(cors());

//configurcion del servidor 
app.set('port', process.env.PORT || 3000)

//rutas
app.use('/api/tasks', tasksRouter);

export default app