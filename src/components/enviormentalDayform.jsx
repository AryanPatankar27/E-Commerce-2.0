import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../image/backgroundEnviorment.jpeg'; // Replace with your background image

const EnvironmentDayForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    saplingType: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/environment-form', formData)
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
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">World Environment Day</h1>
        <p className="text-gray-700 text-center mb-8">
          Plant a sapling and make the Earth a greener place! Fill in the form below to request your sapling.
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
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
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
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
              rows="3"
              required
            />
          </div>

          <div>
            <label htmlFor="saplingType" className="block text-lg font-medium text-gray-700">
              Sapling Type
            </label>
            <select
              id="saplingType"
              name="saplingType"
              value={formData.saplingType}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
              required
            >
              <option value="">Select a Sapling</option>
              <option value="Mango">Mango</option>
              <option value="Neem">Neem</option>
              <option value="Banyan">Banyan</option>
              <option value="Peepal">Peepal</option>
              <option value="Tulsi">Tulsi</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnvironmentDayForm;