import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: [true, 'Login is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    role: {
        type: String,
        enum: {
            values: ['USER', 'ADMIN'], // Только эти значения разрешены
            message: 'Role {VALUE} is not supported.'
        },
        default: 'USER',
    },
}, {
    timestamps: true
});


export default mongoose.model('Property-User', UserSchema);