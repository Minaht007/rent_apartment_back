// models/Member.js
import mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    position: {
        type: String,
        required: [true, 'Position is required'],
        trim: true
    },
    contact: {
        type: String,
        required: [true, 'Contact phone is required'],
        match: [/^\+?\d{10,15}$/, 'Please enter a valid phone number']
    },
    photo: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

export default mongoose.model('Member', MemberSchema);