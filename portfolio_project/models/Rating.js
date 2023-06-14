import { model, models, Schema } from 'mongoose';
import BaseSchema from './baseSchema';

const ratingSchema = new BaseSchema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  resturantId: {
    type: Schema.Types.ObjectId,
    ref: 'Resturants',
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
})

const Rating = models.Rating || model('Rating', ratingSchema);
export default Rating;
