import mongoose from 'mongoose';

const RegisterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    comments: {
      type: String,
      trim: true,
    },
    location: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
    service: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Register', RegisterSchema);
