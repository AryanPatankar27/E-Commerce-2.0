const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/routes');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');
const environmentRoutes = require('./routes/environmentRoutes');
const readingRoutes = require('./routes/readingRoutes');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }
});

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/', userRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', environmentRoutes);
app.use('/api', readingRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    console.error('MongoDB URI:', process.env.MONGO_URI);
    process.exit(1);
  });

// Define Group Schema
const groupSchema = new mongoose.Schema({
  name: String,
  members: [{ id: String, name: String }],
  items: [{ name: String, image: String, price: Number, addedBy: String }]
});

const Group = mongoose.model('Group', groupSchema);

// Socket.io connection
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('joinGroup', (groupId) => {
    socket.join(groupId);
  });

  socket.on('addItem', async ({ groupId, item }) => {
    try {
      const group = await Group.findById(groupId);
      group.items.push(item);
      await group.save();
      io.to(groupId).emit('itemAdded', group);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  });

  socket.on('joinGroupMember', async ({ groupId, member }) => {
    try {
      const group = await Group.findById(groupId);
      if (group.members.length < 5) {
        group.members.push(member);
        await group.save();
        io.to(groupId).emit('memberJoined', group);
      } else {
        socket.emit('groupFull');
      }
    } catch (error) {
      console.error('Error joining group:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Group API Routes
app.post('/api/groups', async (req, res) => {
  try {
    const newGroup = new Group(req.body);
    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/groups/:id', async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (group) {
      res.json(group);
    } else {
      res.status(404).json({ message: 'Group not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle server errors
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${PORT} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${PORT} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
      process.exit(0);
    });
  });
});