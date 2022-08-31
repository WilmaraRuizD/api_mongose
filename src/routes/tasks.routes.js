import {
    Router
} from "express";
import * as tasksctrol from "../controllers/task.controllers"

const router = Router();
// solicita una representación de un recurso específico.
router.get('/', tasksctrol.getTasks);
//se utiliza para enviar una entidad a un recurso en específico, 
//ausando a menudo un cambio en el estado
router.post('/', tasksctrol.postTasks);
///filta por tareas true
router.get('/done', tasksctrol.findAllTaks)

//representa un recurso definido por id 
router.get('/:id', tasksctrol.getIdTasks)
///es una peticion de actualizacion interpretada por el servidor, se debe 
//el recurso completo 
router.put('/:id', tasksctrol.putTasks)
///es para modificar parcialmente el recurso el seridor tiene instrucciones
//que lomodifican parcialmente se puede enviar solo un elemento de 
//la peticion 
//router.patch('/:id', tasksctrol.patchTasks)
///elimina un recurso 
router.delete('/:id', tasksctrol.deleteTasks)


export default router