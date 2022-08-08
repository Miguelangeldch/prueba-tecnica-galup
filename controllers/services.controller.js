import Services from '../models/Services.js';

// Add Service

export const addService = async (req, res, next) => {
  try {
    const newService = new Services({
      name: req.body.name,
    });

    await newService.save();
    res.status(200).send('Service has been created');
  } catch (error) {
    next(error);
  }
};

// Get all Services

export const getServices = async (req, res, next) => {
  try {
    const services = await Services.find();

    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};
