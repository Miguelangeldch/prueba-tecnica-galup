import mongoose from 'mongoose';

const ServicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

export default mongoose.model('Services', ServicesSchema);
