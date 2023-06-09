import { model } from "mongoose";
import BaseSchema from "./baseSchema";

const userSchema = new BaseSchema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

const Users = model('Users', userSchema)

export default Users;
