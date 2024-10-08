const ReadingForm = require('../models/reading');

exports.submitReadingForm = async (req, res) => {
  try {
    const { name, address, favoriteBook } = req.body;

    const newForm = new ReadingForm({
      name,
      address,
      favoriteBook
    });

    await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
};
