import { Schema, model, models } from 'mongoose';
import BaseSchema from './baseSchema';

const resturantsSchema = new BaseSchema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  modifiedBy: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  }
})

const Resturants = models.Resturants || model('Resturants', resturantsSchema)
export default Resturants