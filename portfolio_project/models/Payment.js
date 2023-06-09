import { model, models, Schema } from 'mongoose';
import BaseSchema from './baseSchema';

const paymentSchema = new BaseSchema({
  order_id: {
    type: Schema.Types.ObjectId,
    ref: 'Orders',
  },
  paymentMethod: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }

})

const Payment = models.Payment || model('Payment', paymentSchema);
export default Payment;
