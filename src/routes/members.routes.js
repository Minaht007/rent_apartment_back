// routes/member.routes.js
import { Router } from 'express';
import multer from 'multer';
import MemberController from '../controllers/MemberController.js';
import authMiddleware from '../middlewares/authMiddleware.js'
import roleMiddleware from '../middlewares/roleMiddleware.js'

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

// Публичные: только чтение
router.get('/', MemberController.getAll);
router.get('/:id', MemberController.getById);

// Защищённые: только для авторизованных (можно ограничить по роли)
router.post('/', authMiddleware, roleMiddleware("ADMIN"), upload.single('photo'), MemberController.create);
router.put('/:id', authMiddleware, roleMiddleware("ADMIN"), upload.single('photo'), MemberController.update);
router.delete('/:id', authMiddleware, roleMiddleware("ADMIN"), MemberController.delete);

export default router;