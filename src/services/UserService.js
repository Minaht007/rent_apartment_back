import User from '../models/User.js'
import bcrypt from 'bcryptjs'

class UserService {

    async deleteUser(userId) {
        await User.findByIdAndDelete(userId)
    }

    async findAll(query) {
        let { page, limit } = query

        page = page || 1
        limit = limit || 0
        let offset = page * limit - limit

        return await User.find()
            .skip(offset)
            .limit(+limit)
    }

    async findUser(login) {
        return await User.findOne({ login });
    }

    async deleteAll() {
        return await User.deleteMany()
    }

    async createUser(user) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt)
        const newUser = await User.create({
            "login": user.login,
            "password": hashedPassword,
            "role": user.role
        })
        return newUser
    }
}

export default new UserService()

