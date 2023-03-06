import { obtenerDatos, crearDato, guardarDatos, guardarUsuario, listarOperaciones } from '../negocio/datos.js'

async function getDatosController(req, res) {
    const datos = await obtenerDatos()
    res.json(datos)
}

async function postDatosController(req, res) {
    const dato = req.body
    await crearDato(dato)
    res.status(201).json(dato)
}

const sumaController = async (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) return res.json({ error: 'Debes enviar los parametros por query' })

    await guardarDatos({
        type: 'suma',
        parameters: {
            a,
            b
        },
        result: Number(a) + Number(b),
        timestamp: Date.now()
    })

    return res.json({ resultado: Number(a) + Number(b) })
}
const restaController = async (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) return res.send('Debes enviar los parametros por query')

    await guardarDatos({
        type: 'resta',
        parameters: {
            a,
            b
        },
        result: Number(a) - Number(b),
        timestamp: Date.now()
    })

    return res.json({ resultado: Number(a) - Number(b) })
}
const multiplicaController = async (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) return res.send('Debes enviar los parametros por query')

    await guardarDatos({
        type: 'multiplicasion',
        parameters: {
            a,
            b
        },
        result: Number(a) * Number(b),
        timestamp: Date.now()
    })

    return res.json({ resultado: Number(a) * Number(b) })
}
const divisionController = async (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) return res.send('Debes enviar los parametros por query')

    await guardarDatos({
        type: 'division',
        parameters: {
            a,
            b
        },
        result: Number(a) / Number(b),
        timestamp: Date.now()
    })

    return res.json({ resultado: Number(a) / Number(b) })
}

const registroController = async (req, res) => {
    const { email, pass } = req.body;

    const clave = await guardarUsuario(email, pass);

    return res.json(clave)

}

const listarController = async (req, res) => {
    const { clave } = req.query;

    const { datos, error } = await listarOperaciones(clave);

    if (error) {
        return res.json({ error })
    }

    return res.json({ datos })
}



export {
    getDatosController,
    postDatosController,
    registroController,
    divisionController,
    multiplicaController,
    restaController,
    sumaController,
    listarController
}