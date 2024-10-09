import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Card from "../components/ui/card";
import CardContent from "../components/ui/cardContent";
import CardHeader from "../components/ui/cardHeader";
import CardTitle from "../components/ui/cardTitle";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "../components/ui/table";

const GroupPage = () => {
  const { groupId } = useParams();
  const [newItem, setNewItem] = useState('');
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const groups = JSON.parse(localStorage.getItem('groups')) || {};
    if (groups[groupId]) {
      setGroup(groups[groupId]);
    }
  }, [groupId]);

  const handleAddItem = () => {
    if (newItem.trim()) {
      const groups = JSON.parse(localStorage.getItem('groups')) || {};
      if (groups[groupId]) {
        groups[groupId].items.push(newItem.trim());
        localStorage.setItem('groups', JSON.stringify(groups));
        setGroup(groups[groupId]);
        setNewItem('');
      }
    }
  };

  const handleJoinGroup = (userName) => {
    const groups = JSON.parse(localStorage.getItem('groups')) || {};
    if (groups[groupId] && groups[groupId].members.length < 5) {
      groups[groupId].members.push(userName);
      localStorage.setItem('groups', JSON.stringify(groups));
      setGroup(groups[groupId]);
    } else {
      alert("Maximum number of members reached!");
    }
  };

  if (!group) return <div>Loading...</div>;

  const shareableLink = `${window.location.origin}/join/${groupId}`;

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>{group.name}</CardTitle>
          <p>Group ID: {groupId}</p>
          <p>Number of Members: {group.members.length} / 5</p>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Shareable Link:</h3>
          <Input
            type="text"
            value={shareableLink}
            readOnly
            className="mb-4"
          />
          <div className="flex space-x-2">
            <Input
              placeholder="Add new item"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <Button onClick={handleAddItem}>Add Item</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Group Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {group.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Group Members</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Members</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {group.members.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>{member}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Input
            placeholder="Enter your name"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleJoinGroup(e.target.value);
                e.target.value = ''; // Clear input
              }
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default GroupPage;