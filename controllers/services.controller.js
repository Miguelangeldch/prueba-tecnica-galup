import Services from '../models/Services.js';

// POST

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

// GET ALL

export const getServices = async (req, res, next) => {
  try {
    const services = await Services.find();

    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

// UPDATE

export const updateService = async (req, res, next) => {
  try {
    const updateService = await Services.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateService);
  } catch (err) {
    next(err);
  }
};

// DELETE ONE

export const deleteService = async (req, res, next) => {
  try {
    await Services.findByIdAndDelete(req.params.id);
    res.status(200).json('Service deleted');
  } catch (err) {
    next(err);
  }
};
