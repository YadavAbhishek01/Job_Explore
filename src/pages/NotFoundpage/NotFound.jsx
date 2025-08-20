// pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-indigo-800 tracking-widest">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-500 mt-2 mb-6">
          Sorry, the page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition"
        >
          <FaArrowLeft className="mr-2" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
