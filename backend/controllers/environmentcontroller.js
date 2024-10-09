const EnvironmentForm = require('../models/environment');

exports.submitEnvironmentForm = async (req, res) => {
  try {
    const { name, address, saplingType } = req.body;

    const newForm = new EnvironmentForm({
      name,
      address,
      saplingType
    });

    await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: `Failed to submit form` });
  }
};