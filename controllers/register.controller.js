import Register from '../models/Register.js';
import { sendEmail } from '../services/sendEmail.js';

// POST

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

// GET ALL

export const getRegisters = async (req, res, next) => {
  try {
    const registers = await Register.find();

    res.status(200).json(registers);
  } catch (error) {
    next(error);
  }
};

// UPDATE

export const updateRegister = async (req, res, next) => {
  try {
    const updateRegister = await Register.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateRegister);
  } catch (err) {
    next(err);
  }
};

// DELETE ONE

export const deleteRegister = async (req, res, next) => {
  try {
    await Register.findByIdAndDelete(req.params.id);
    res.status(200).json('Register deleted');
  } catch (err) {
    next(err);
  }
};