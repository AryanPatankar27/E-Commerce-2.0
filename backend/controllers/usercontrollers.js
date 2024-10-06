const UserSignup = require('../models/usersignup');
const UserLogin = require('../models/userlogin');
const bcrypt = require('bcrypt');

// User signup controller
exports.userSignup = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        // Check if user already exists
        let existingUser = await UserSignup.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new UserSignup({
            email,
            name,
            password: hashedPassword
        });

        // Save user in the database
        await newUser.save();
        const newUserLogin = new UserLogin({
            email, // Ensure this is email
            name,
            password: hashedPassword
        });
        await newUserLogin.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// User login controller
exports.userLogin = async (req, res) => {
    const { name, password } = req.body;
    try {
        // Find user by name
        const user = await UserLogin.findOne({ name });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful', user: { name: user.name, email: user.email } });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};
