import { Router } from 'express'
import { getDatosController, postDatosController, sumaController, multiplicaController, restaController, divisionController, listarController, registroController } from '../controlador/datos.js'

const routerDatos = new Router()

routerDatos.get('/', getDatosController)
routerDatos.post('/', postDatosController)

routerDatos.get('/suma', sumaController)
routerDatos.get('/multiplica', multiplicaController)
routerDatos.get('/resta', restaController)
routerDatos.get('/division', divisionController)
routerDatos.get('/listar', listarController)
routerDatos.post('/registro', registroController)


export default routerDatos