import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button, Card, CardHeader, CardContent } from './components/ui/index.jsx';

// Home Component
const Home = () => (
  <Card className="w-full max-w-md">
    <CardHeader>
      <h1 className="text-2xl font-bold">Group Shopping App</h1>
    </CardHeader>
    <CardContent className="flex flex-col gap-4">
      <Link to="/create">
        <Button className="w-full">Create Group</Button>
      </Link>
      <Link to="/join">
        <Button className="w-full">Join Group</Button>
      </Link>
    </CardContent>
  </Card>
);

// CreateGroup Component
const CreateGroup = () => {
  const [groupId, setGroupId] = React.useState('');
  const [members, setMembers] = React.useState([]);

  const createGroup = () => {
    const newGroupId = Math.random().toString(36).substr(2, 9);
    setGroupId(newGroupId);
    setMembers([{ id: 1, name: 'You (Admin)', status: 'approved' }]);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h1 className="text-2xl font-bold">Create Group</h1>
      </CardHeader>
      <CardContent>
        {!groupId ? (
          <Button onClick={createGroup} className="w-full">Create New Group</Button>
        ) : (
          <>
            <p className="mb-4">Group ID: {groupId}</p>
            <h2 className="text-lg font-semibold mb-2">Members:</h2>
            <ul>
              {members.map(member => (
                <li key={member.id}>{member.name} ({member.status})</li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  );
};

// JoinGroup Component
const JoinGroup = () => {
  const [groupId, setGroupId] = React.useState('');
  const [name, setName] = React.useState('');
  const [joinStatus, setJoinStatus] = React.useState('');

  const handleJoin = () => {
    // In a real app, this would send a request to the server
    setJoinStatus('Request sent. Waiting for admin approval.');
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h1 className="text-2xl font-bold">Join Group</h1>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Group ID"
          value={groupId}
          onChange={(e) => setGroupId(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <Button onClick={handleJoin} className="w-full">Join Group</Button>
        {joinStatus && <p>{joinStatus}</p>}
      </CardContent>
    </Card>
  );
};

// ManageGroup Component (for group admin)
const ManageGroup = () => {
  const [pendingMembers, setPendingMembers] = React.useState([
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
  ]);
  const [approvedMembers, setApprovedMembers] = React.useState([
    { id: 1, name: 'You (Admin)' },
  ]);

  const handleApprove = (member) => {
    setApprovedMembers([...approvedMembers, member]);
    setPendingMembers(pendingMembers.filter(m => m.id !== member.id));
  };

  const handleDeny = (memberId) => {
    setPendingMembers(pendingMembers.filter(m => m.id !== memberId));
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h1 className="text-2xl font-bold">Manage Group</h1>
      </CardHeader>
      <CardContent>
        <h2 className="text-lg font-semibold mb-2">Pending Requests:</h2>
        <ul className="mb-4">
          {pendingMembers.map(member => (
            <li key={member.id} className="flex justify-between items-center mb-2">
              {member.name}
              <div>
                <Button onClick={() => handleApprove(member)} className="mr-2">Approve</Button>
                <Button onClick={() => handleDeny(member.id)} variant="destructive">Deny</Button>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold mb-2">Approved Members:</h2>
        <ul>
          {approvedMembers.map(member => (
            <li key={member.id}>{member.name}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-xl font-bold text-gray-800">Group Shopping</Link>
                </div>
                <div className="ml-6 flex space-x-8">
                  <Link to="/create" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                    Create Group
                  </Link>
                  <Link to="/join" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                    Join Group
                  </Link>
                  <Link to="/manage" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                    Manage Group
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateGroup />} />
            <Route path="/join" element={<JoinGroup />} />
            <Route path="/manage" element={<ManageGroup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;