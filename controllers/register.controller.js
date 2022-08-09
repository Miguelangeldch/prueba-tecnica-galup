import Register from '../models/Register.js';
import { sendEmail } from '../services/sendEmail.js';

// REGISTER

export const register = async (req, res, next) => {
  try {
    const newRegister = new Register({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      location: {
        lat: req.body.location.lat,
        lng: req.body.location.lng,
      },
      service: req.body.service,
      comments: req.body.comments,
      date: req.body.date,
    });

    const savedRegister = await newRegister.save();
    const response = {
      name: savedRegister.name,
      lastname: savedRegister.lastname,
      email: savedRegister.email,
      phone: savedRegister.phone,
      location: {
        lat: savedRegister.location.lat,
        lng: savedRegister.location.lng,
      },
      service: savedRegister.service,
      comments: savedRegister.comments,
      date: savedRegister.date,
    };

    sendEmail(response).catch(console.error);
    res.status(200).json(response);
  } catch (err) {
    res.status(403).json({ err });
    next(err);
  }
};
