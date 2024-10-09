const Product = require('../models/product');

// Add a new product
exports.addProduct = async (req, res) => {
    const { name, description, price, category, imageUrl, stockQuantity } = req.body;

    try {
        // Create a new product
        const newProduct = new Product({
            name,
            description,
            price,
            category,
            imageUrl,
            stockQuantity
        });

        // Save the product to the database
        await newProduct.save();
        return res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get products by category
exports.getProductsByCategory = async (req, res) => {
    const { category } = req.params;

    try {
        const products = await Product.find({ category });
        if (!products.length) {
            return res.status(404).json({ message: 'No products found in this category' });
        }

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get single product details
exports.getProductDetails = async (req, res) => {
    const { productId } = req.params;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    const { productId } = req.params;
    const { name, description, price, category, imageUrl, stockQuantity } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { name, description, price, category, imageUrl , stockQuantity},
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    const { productId } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};
