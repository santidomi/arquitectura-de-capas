import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    email: { type: String },
    pass: { type: String },
    code: { type: String }
})

export default userModel;