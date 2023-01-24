import mongoose, { Schema } from 'mongoose';
const { String, Number } = Schema.Types;

const userCollection = 'users';

const MealSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  dni: { type: Number, require: true }
});

export default mongoose.model(userCollection, MealSchema);
