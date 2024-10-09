// src/context/GroupContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create a context
const GroupContext = createContext();

// GroupProvider component
export const GroupProvider = ({ children }) => {
  // State to manage groups; each group has an ID, name, members, and items
  const [groups, setGroups] = useState({}); // Example: { groupId: { name: 'Group Name', members: [], items: [] } }

  // Function to create a new group
  const createNewGroup = (name) => {
    const groupId = Date.now().toString(); // Generate a unique ID based on the current timestamp
    setGroups((prev) => ({
      ...prev,
      [groupId]: { name, members: [], items: [] }, // Add new group with the given name
    }));
    return groupId; // Return the new group ID
  };

  // Function to join a group with a given user
  const joinGroup = (groupId, user) => {
    setGroups((prev) => {
      const group = prev[groupId];
      // Check if the group exists before adding the user
      if (group) {
        // Avoid adding the same user twice
        if (!group.members.includes(user)) {
          return {
            ...prev,
            [groupId]: { ...group, members: [...group.members, user] }, // Add user to the members array
          };
        }
      }
      return prev; // Return previous state if group does not exist or user is already in the group
    });
  };

  // Function to add an item to a group
  const addItem = (groupId, item) => {
    setGroups((prev) => {
      const group = prev[groupId];
      // Check if the group exists before adding the item
      if (group) {
        return {
          ...prev,
          [groupId]: { ...group, items: [...group.items, item] }, // Add item to the items array
        };
      }
      return prev; // Return previous state if group does not exist
    });
  };

  // Function to fetch a group by its ID
  const fetchGroup = (groupId) => {
    return groups[groupId] || null; // Return the group details if found, otherwise return null
  };

  // Provide context values to children components
  return (
    <GroupContext.Provider value={{ createNewGroup, joinGroup, fetchGroup, addItem }}>
      {children}
    </GroupContext.Provider>
  );
};

// Custom hook to use the GroupContext
export const useGroup = () => {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error("useGroup must be used within a GroupProvider"); // Error handling if used outside the provider
  }
  return context; // Return the context value
};
