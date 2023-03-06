
import mongoose from "mongoose";

const operacionesModel = new mongoose.Schema({
    type: { type: String },
    parameters: { type: Object },
    result: { type: Number },
    timestamp: { type: Number }
})

export default operacionesModel;