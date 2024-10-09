import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Card from "../components/ui/card";
import CardContent from "../components/ui/cardContent";
import CardHeader from "../components/ui/cardHeader";
import CardTitle from "../components/ui/cardTitle";
;
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "../components/ui/table";

// Import images
import smartphoneImg from '../assets/Images/Electronics/Smartphone.jpg';
import laptopImg from '../assets/Images/Electronics/Laptop.jpg';
import earbudsImg from '../assets/Images/Electronics/WirelessEarbuds.jpg';
import smartWatchImg from '../assets/Images/Electronics/SmartWatch.jpg';
import tabletImg from '../assets/Images/Electronics/Tablet.jpg';

const products = [
  { id: 1, name: 'Smartphone', price: 599.99, image: smartphoneImg },
  { id: 2, name: 'Laptop', price: 999.99, image: laptopImg },
  { id: 3, name: 'Wireless Earbuds', price: 129.99, image: earbudsImg },
  { id: 4, name: 'Smart Watch', price: 199.99, image: smartWatchImg },
  { id: 5, name: 'Tablet', price: 349.99, image: tabletImg },
];

const GroupPage = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [showSharedCart, setShowSharedCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const groups = JSON.parse(localStorage.getItem('groups')) || {};
    if (groups[groupId]) {
      setGroup(groups[groupId]);
    }
  }, [groupId]);

  const handleAddToSharedCart = (product) => {
    const groups = JSON.parse(localStorage.getItem('groups')) || {};
    if (groups[groupId]) {
      const currentUser = prompt("Enter your name:"); // In a real app, you'd use proper authentication
      const existingItemIndex = groups[groupId].items.findIndex(
        item => item.id === product.id && item.addedBy === currentUser
      );

      if (existingItemIndex !== -1) {
        groups[groupId].items[existingItemIndex].quantity += 1;
      } else {
        groups[groupId].items.push({...product, addedBy: currentUser, quantity: 1});
      }

      localStorage.setItem('groups', JSON.stringify(groups));
      setGroup(groups[groupId]);
    }
  };

  const handleUpdateQuantity = (itemIndex, change) => {
    const groups = JSON.parse(localStorage.getItem('groups')) || {};
    if (groups[groupId]) {
      const newQuantity = groups[groupId].items[itemIndex].quantity + change;
      if (newQuantity > 0) {
        groups[groupId].items[itemIndex].quantity = newQuantity;
      } else {
        groups[groupId].items.splice(itemIndex, 1);
      }
      localStorage.setItem('groups', JSON.stringify(groups));
      setGroup(groups[groupId]);
    }
  };

  const handleRemoveFromCart = (itemIndex) => {
    const groups = JSON.parse(localStorage.getItem('groups')) || {};
    if (groups[groupId]) {
      groups[groupId].items.splice(itemIndex, 1);
      localStorage.setItem('groups', JSON.stringify(groups));
      setGroup(groups[groupId]);
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

  const calculateDiscount = (totalPrice) => {
    if (totalPrice > 1000) return 0.15;
    if (totalPrice > 500) return 0.1;
    if (totalPrice > 200) return 0.05;
    return 0;
  };

  const handleCheckout = () => {
    const totalPrice = group.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountRate = calculateDiscount(totalPrice);
    const discountAmount = totalPrice * discountRate;
    const finalPrice = totalPrice - discountAmount;

    const receiptData = {
      items: group.items,
      totalPrice,
      discountRate,
      discountAmount,
      finalPrice
    };

    localStorage.setItem('receiptData', JSON.stringify(receiptData));
    navigate('/receipt');
  };

  const handleGenerateReceipt = () => {
    navigate('/receipt');
  };

  if (!group) return <div>Loading...</div>;

  const shareableLink = `${window.location.origin}/join/${groupId}`;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 bg-[#DCD0FF] min-h-screen">
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
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="p-4 flex flex-col">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
                <h3 className="font-semibold mb-1">{product.name}</h3>
                <p className="text-sm mb-2">${product.price.toFixed(2)}</p>
                <Button 
                  onClick={() => handleAddToSharedCart(product)} 
                  className="mt-auto flex items-center justify-center"
                >
                  <ShoppingCart size={16} className="mr-1" />
                  Add to Shared Cart
                </Button>
              </Card>
            ))}
          </div>
          <Button onClick={() => setShowSharedCart(!showSharedCart)} className="mb-4">
            {showSharedCart ? 'Hide Shared Cart' : 'View Shared Cart'}
          </Button>
          {showSharedCart && (
            <Card>
              <CardHeader>
                <CardTitle>Shared Cart</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Image</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Added By</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {group.items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-16 h-16 object-cover rounded" 
                          />
                        </TableCell>
                        <TableCell>${item.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Button onClick={() => handleUpdateQuantity(index, -1)} className="p-1">
                              <Minus size={16} />
                            </Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button onClick={() => handleUpdateQuantity(index, 1)} className="p-1">
                              <Plus size={16} />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>{item.addedBy}</TableCell>
                        <TableCell>
                          <Button onClick={() => handleRemoveFromCart(index)} className="p-1">
                            <Trash2 size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
          <div className="flex justify-between mt-4">
            <Button onClick={handleCheckout}>Checkout</Button>
            <Button onClick={handleGenerateReceipt}>Generate Receipt</Button>
          </div>
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