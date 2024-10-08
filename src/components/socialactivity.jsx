import React from 'react';
import { Link } from 'react-router-dom';
import environmentImage from '../images/world enviormental day.jpeg';
import readingImage from '../images/reading day.jpeg';

const SocialActivity = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">Social Impact Days</h1>

      {/* World Environment Day Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 bg-green-50 p-8 rounded-lg shadow-lg">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">World Environment Day</h2>
          <p className="text-gray-700 mb-6">
            Join us in celebrating World Environment Day by taking small steps towards a greener planet. Plant a tree, reduce waste, and recycle more. Together, we can make a big difference!
          </p>
          <Link to="/environment-form">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all">
              Fill Form
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center">
          <img
            src={environmentImage}
            alt="Environment Day"
            className="rounded-lg shadow-md object-cover w-full max-h-64"
          />
        </div>
      </div>

      {/* World Reading Day Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between bg-blue-50 p-8 rounded-lg shadow-lg">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">World Reading Day</h2>
          <p className="text-gray-700 mb-6">
            On World Reading Day, let's celebrate the joy of reading. Dive into a new book, share your favorite reads, and promote literacy. A book can change a life!
          </p>
          <Link to="/reading-form">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all">
              Fill Form
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center">
          <img
            src={readingImage}
            alt="Reading Day"
            className="rounded-lg shadow-md object-cover w-full max-h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialActivity;
