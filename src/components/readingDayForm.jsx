import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../image/backgroundReading.jpeg'; // Replace with your background image

const ReadingDayForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    favoriteBook: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/reading-form', formData)
      .then(response => {
        alert(`Thank you ${formData.name}, your request has been submitted!`);
      })
      .catch(error => {
        console.error('Error submitting the form', error);
        alert('There was an error submitting your form. Please try again.');
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">World Reading Day</h1>
        <p className="text-gray-700 text-center mb-8">
          Share your favorite book with us and celebrate the joy of reading!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-lg font-medium text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              rows="3"
              required
            />
          </div>

          <div>
            <label htmlFor="favoriteBook" className="block text-lg font-medium text-gray-700">
              Favorite Book 
            </label>
            <input
              type="text"
              id="favoriteBook"
              name="favoriteBook"
              value={formData.favoriteBook}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReadingDayForm;