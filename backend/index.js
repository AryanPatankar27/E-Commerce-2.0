const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');
const environmentRoutes = require('./routes/enviormentRoutes'); 
const readingRoutes = require('./routes/readingRoutes');


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/',userRoutes);
app.use('/api', productRoutes); // Product-related routes (e.g., add, fetch products)
app.use('/api', cartRoutes); // Cart-related routes (e.g., add to cart, view cart)
app.use('/api', environmentRoutes); // Environment Day form routes
app.use('/api', readingRoutes); // Reading Day form routes



// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Test route
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
