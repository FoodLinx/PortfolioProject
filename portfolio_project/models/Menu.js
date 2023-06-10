import { model, models, Schema } from 'mongoose';
import BaseSchema from './baseSchema';

const menuSchema = new BaseSchema({
  resturantId: {
    type: Schema.Types.ObjectId,
    ref: 'Resturants',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
  }
})

const Menu = models.Menu || model('Menu', menuSchema)
export default Menu
