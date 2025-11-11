// src/models/UserTracking.js
import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
    date: { 
        type: String, 
        required: true,
        index: true 
    }, // формат: "07.11.2025"
    path: { 
        type: String, 
        required: true,
        index: true 
    }, // например: "/api/analyze", "/health", "/"
    count: { 
        type: Number, 
        default: 1 
    }
}, { 
    timestamps: true,
});

// Увеличиваем счётчик при совпадении date + path
activitySchema.index({ date: 1, path: 1 }, { unique: true });

const VisitTracking = mongoose.model('VisitTracking', activitySchema);

export default VisitTracking;