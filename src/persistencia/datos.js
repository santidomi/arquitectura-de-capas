import mongoose from 'mongoose';
import operacionesModel from '../model/operacionesModel.js';
import userModel from '../model/userModel.js';

mongoose
   .connect(
      "mongodb+srv://santiagomorera:NBLW114i2jvyU60F@cluster0.1clmwkn.mongodb.net/capas"
   )
   .then(() => console.log("Connected to Mongo"))
   .catch((e) => {
      console.error(e);
      throw "can not connect to the mongo!";
   });

async function recuperarTodos() {
   return datos
}

async function guardar(dato) {
   const model = mongoose.model('operaciones', operacionesModel)
   model.create(dato)

}


async function guardarUser(email, pass, clave) {
   const model = mongoose.model('usuarios', userModel)
   model.create({ email, pass, code: clave })

}

const getUser = async (clave) => {
   const model = mongoose.model('usuarios', userModel);

   const user = model.find({ code: clave })

   return user;
}

const getDatos = async (clave) => {
   const model = mongoose.model('operaciones', operacionesModel);

   const datos = model.find({})

   return datos;
}




export {
   recuperarTodos,
   guardar,
   guardarUser,
   getUser,
   getDatos
}
