import { recuperarTodos, guardar, guardarUser, getUser, getDatos } from '../persistencia/datos.js';
import { v4 as uuidv4 } from 'uuid';


async function obtenerDatos() {
    return await recuperarTodos()
}

async function crearDato(dato) {
    dato.added = Date.now()
    await guardar(dato)
    return dato
}


const guardarDatos = async (datos) => {
    return await guardar(datos)
}

const guardarUsuario = async (email, pass) => {
    const clave = uuidv4()
    await guardarUser(email, pass, clave)
    return { clave }
}


const listarOperaciones = async (clave) => {
    if (!clave) return { error: 'Debes ingresar tu clave' };

    const user = await getUser(clave);

    console.log({ user })

    if (!user || !user.length) return { error: 'No existe tu usuario' }


    const datos = await getDatos();

    return { datos }
}



export { obtenerDatos, crearDato, guardarDatos, guardarUsuario, listarOperaciones }