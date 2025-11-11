// src/configs/database.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {});
        console.log('MongoDB connected');
    } catch (err) {
        console.error('[ERROR] Connection error MongoDB:', err);
        throw err;
    }
};

export default connectDB;