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
    <div className="min-h-screen flex items-center justify-center bg-[#DCD0FF]">
      <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-[#3B82F6]">Create a Group</h2>
        <Input
          type="text"
          placeholder="Enter group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="w-full mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition duration-200"
        />
        <Button
          onClick={handleCreateGroup}
          className="w-full bg-[#3B82F6] text-white py-2 rounded-md hover:bg-[#2563EB] transition duration-200"
        >
          Create Group
        </Button>
      </Card>
    </div>
  );
};

export default CreateGroup;