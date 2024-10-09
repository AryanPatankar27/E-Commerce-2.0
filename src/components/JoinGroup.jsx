import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Card from "../components/ui/card";

const JoinGroup = () => {
  const [groupId, setGroupId] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleJoinGroup = () => {
    if (groupId.trim() && name.trim()) {
      const groups = JSON.parse(localStorage.getItem('groups')) || {};
      if (groups[groupId]) {
        if (groups[groupId].members.length < 5) {
          groups[groupId].members.push(name);
          localStorage.setItem('groups', JSON.stringify(groups));
          navigate(`/group/${groupId}`);
        } else {
          alert("This group has reached the maximum number of members.");
        }
      } else {
        alert("Group not found. Please check the Group ID.");
      }
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#3B82F6]">Join a Group</h2>
      <Input
        type="text"
        placeholder="Enter Group ID"
        value={groupId}
        onChange={(e) => setGroupId(e.target.value)}
        className="w-full mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition duration-200"
      />
      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition duration-200"
      />
      <Button
        onClick={handleJoinGroup}
        className="w-full bg-[#3B82F6] text-white py-2 rounded-md hover:bg-[#2563EB] transition duration-200"
      >
        Join Group
      </Button>
    </Card>
  );
};

export default JoinGroup;