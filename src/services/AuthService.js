// src/services/AuthService.js

import UserService from './UserService.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

class AuthService {

    generateToken = (login, role) => {
        return jwt.sign(
            { login, role },
            process.env.SECRET_KEY,
            { expiresIn: '24h' }
        )
    }

    // POST
    async register({ login, password }) {
        const candidate = await UserService.findUser(login)
        if (candidate) throw new Error("User already exists")

        return await UserService.createUser({ login, password, role: 'USER' })
    }

    // POST
    async login({ login, password }) {
        const user = await UserService.findUser(login)
        if (!user) throw new Error("User not found")

        const valid = bcrypt.compareSync(password, user.password)
        if (!valid) throw new Error("Wrong password")

        return this.generateToken(login, user.role)
    }

    verifyToken(token) {
        try {
            return jwt.verify(token, process.env.SECRET_KEY)
        } catch (err) {
            throw new Error("Token expired or invalid")
        }
    }
}

export default new AuthService()