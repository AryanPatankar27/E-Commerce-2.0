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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="shadow-lg rounded-lg max-w-md w-full">
        <div className="text-center text-xl font-semibold mb-4">Join a Group</div>
        <div className="space-y-4">
          <Input
            placeholder="Group ID"
            value={groupId}
            onChange={(e) => setGroupId(e.target.value)}
            className="border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
          <Button
            onClick={handleJoinGroup}
            className="w-full bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Join Group
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default JoinGroup;