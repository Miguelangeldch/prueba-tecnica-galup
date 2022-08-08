import Register from '../models/Register.js';

// REGISTER

export const register = async (req, res, next) => {
  try {
    const newRegister = new Register({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      comments: req.body.comments,
      location: {
        lat: req.body.location.lat,
        lng: req.body.location.lng,
      },
      service: req.body.service
    });

    const savedRegister = await newRegister.save();
    res.status(200).json(savedRegister);
  } catch (err) {
    res.status(403).json({ message: err.message, code: err.code });
    next(err);
  }
};
