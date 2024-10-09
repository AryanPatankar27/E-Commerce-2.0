import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Card from "../components/ui/card";

const CreateGroup = () => {
  const [groupName, setGroupName] = useState('');
  const navigate = useNavigate();

  const handleCreateGroup = () => {
    if (groupName.trim()) {
      const groupId = uuidv4();
      
      // Save group to local storage
      const groups = JSON.parse(localStorage.getItem('groups')) || {};
      groups[groupId] = { name: groupName, members: [], items: [] };
      localStorage.setItem('groups', JSON.stringify(groups));
      
      // Navigate to the group page with groupId
      navigate(`/group/${groupId}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="shadow-lg rounded-lg max-w-md w-full">
        <div className="text-center text-xl font-semibold mb-4">Create a Group</div>
        <div className="space-y-4">
          <Input
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          />
          <Button
            onClick={handleCreateGroup}
            className="w-full bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Create Group
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CreateGroup;