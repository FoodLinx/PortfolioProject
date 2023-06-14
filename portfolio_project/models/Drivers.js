import { model, models } from 'mongoose';
import BaseSchema from './baseSchema';

const driverSchema = new BaseSchema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

const Drivers = models.Drivers || model('Drivers', driverSchema)
export default Drivers;
