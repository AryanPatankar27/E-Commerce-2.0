import React from 'react';

const UserList = ({ users }) => (
  <div className="user-list">
    {users.length ? (
      users.map(user => (
        <div key={user.id} className="user-item border rounded-lg p-4 shadow-md mb-4">
          <p className="font-semibold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
      ))
    ) : (
      <p>No users found</p>
    )}
  </div>
);

export default UserList;
