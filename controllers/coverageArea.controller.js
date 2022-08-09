import CoverageArea from '../models/coverageArea.js';

// POST

export const addZone = async (req, res, next) => {
  try {
    const newZone = new CoverageArea({
      coverageType: req.body.coverageType,
      coverageName: req.body.coverageName,
      vectorLayer: req.body.vectorLayer,
      color: req.body.color,
      radius: req.body.radius,
      position: req.body.position,
    });

    const savedZone = await newZone.save();
    res.status(200).json(savedZone);
  } catch (error) {
    next(error);
  }
};

// GET ALL

export const getZones = async (req, res, next) => {
  try {
    const coverageAreas = await CoverageArea.find();

    res.status(200).json(coverageAreas);
  } catch (error) {
    next(error);
  }
};

// UPDATE ONE

export const updateZone = async (req, res, next) => {
  try {
    const updateZone = await CoverageArea.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateZone);
  } catch (err) {
    next(err);
  }
};

// DELETE ONE

export const deleteZone = async (req, res, next) => {
  try {
    await CoverageArea.findByIdAndDelete(req.params.id);
    res.status(200).json('Zone deleted');
  } catch (err) {
    next(err);
  }
};
