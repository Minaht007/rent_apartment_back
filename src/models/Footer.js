// src/models/Footer.js
import mongoose from 'mongoose';

const FooterSchema = new mongoose.Schema({
    address: { 
        type: String, 
        required: true, 
        trim: true 
    },
    phone: { 
        type: String, 
        required: true, 
        trim: true 
    },
    copyright: { 
        type: String, 
        required: true, 
        trim: true 
    },
    socials: {
        type: [String],
    }
}, { timestamps: true });

// Убедимся, что не будет дубликатов
FooterSchema.index({ _id: 1 });

export default mongoose.model('Footer', FooterSchema);