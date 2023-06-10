import { model, models } from "mongoose";
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
    },
    password: {
      type: String,
      required: true
    }
})

const Users = models.Users || model('Users', userSchema)

export default Users;
