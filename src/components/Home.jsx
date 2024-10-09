// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome to Group Shopping</h1>
      <Link to="/create-group">
        <Button className="mt-4">Create Group</Button>
      </Link>
      <Link to="/join">
        <Button className="mt-4">Join Group</Button>
      </Link>
    </div>
  );
};

export default Home;
