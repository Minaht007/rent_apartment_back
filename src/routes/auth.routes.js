// routes/auth.routes.js
import { Router } from 'express'
import AuthController from '../controllers/AuthController.js'
// import authMiddleware from '../middlewares/authMiddleware.js'
// import roleMiddleware from '../middlewares/roleMiddleware.js'

const router = Router()

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)


// Примеры!

// Пример защищённого роута
// router.get('/profile', authMiddleware, (req, res) => {
//     res.json({ user: req.user })
// })

// Для админа и юзера
// router.get('/profile', 
//     authMiddleware, 
//     roleMiddleware(['USER', 'ADMIN']), 
//     (req, res) => {
//         res.json({ user: req.user })
//     }
// )

export default router