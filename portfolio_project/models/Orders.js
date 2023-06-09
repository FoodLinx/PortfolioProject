import { model, models, Schema } from 'mongoose';
import BaseSchema from './baseSchema';

const ordersSchema = new BaseSchema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  resturant_id: {
    type: Schema.Types.ObjectId,
    ref: 'Resturants',
    required: true
  },
  orderTotal: {
    type: Number,
    required: true
  },
  deliveryStatus: {
    type: String,
    required: true
  }

})

const Orders = models.Orders || model('Orders', ordersSchema)
export default Orders;
