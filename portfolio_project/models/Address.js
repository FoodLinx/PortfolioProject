import { model, models } from "mongoose";
import BaseSchema from "./baseSchema";

const addressSchema = new BaseSchema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  pincode: {
    type: Number,
    required: true
  },
})

const Address = models.Address || model('Address', addressSchema)
export default Address
