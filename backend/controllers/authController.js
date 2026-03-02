const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// POST /api/auth/register (Director only) 
exports.register = async (req, res) => {
    try {
        const { name, username, password, role } = req.body;
        if(!name || !username || !password || !role){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: "Username already exists" });
        }
        const user = await User.create({ name, username, password, role });
        res.status(201).json({
            id: user._id,
            name: user.name,
            username: user.username,
            role: user.role,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/auth/login 
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username }).select("+password");
        if (user && (await user.matchPassword(password))) {
            res.json({
                id: user._id,
                name: user.name,
                username: user.username,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: "Invalid username or password" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /api/auth/me 
exports.getMe = async (req, res) => {
    res.json(req.user);
};
