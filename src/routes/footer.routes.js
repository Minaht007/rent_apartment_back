// routes/footer.routes.js
import { Router } from 'express';
import FooterController from '../controllers/FooterController.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

// GET — все пользователи
router.get('/', FooterController.get);

// POST, PUT, DELETE — только авторизованные
router.post('/', authMiddleware, FooterController.create);
router.put('/', authMiddleware, FooterController.update);
router.delete('/', authMiddleware, FooterController.delete);

export default router;