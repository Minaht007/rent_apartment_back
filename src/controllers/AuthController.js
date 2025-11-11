// controllers/AuthController.js
import AuthService from '../services/AuthService.js'

class AuthController {

	// [POST][api/v1/auth/register]
    async register(req, res) {
        try {
            await AuthService.register(req.body)
            res.status(201).json({ message: "User created" })
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    }

	// [POST][api/v1/auth/login]
    async login(req, res) {
        try {
            const token = await AuthService.login(req.body)
            res.json({ token })
        } catch (err) {
            res.status(401).json({ error: err.message })
        }
    }
}

export default new AuthController()