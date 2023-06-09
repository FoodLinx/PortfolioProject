import { model, models } from 'mongoose';
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
  }
})

const Resturants = models.Resturants || model('Resturants', resturantsSchema)
export default Resturants