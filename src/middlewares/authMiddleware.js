// middlewares/auth.middleware.js
import AuthService from '../services/AuthService.js'

export default function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ error: "No token provided" })
    }

    const token = authHeader.split(' ')[1]

    try {
        const payload = AuthService.verifyToken(token)
        req.user = payload // { login, role }
        next()
    } catch (err) {
        return res.status(401).json({ error: "Token expired or invalid. Login again." })
    }
}
