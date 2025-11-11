import Router from 'express';
// import UserRouter from '../routes/UserRouter.js';
import AuthRouter from '../routes/auth.routes.js';
import MemberRouter from '../routes/members.routes.js';
import FooterRouter from '../routes/footer.routes.js';


const router = new Router();

// [api]
// router.use('/users', UserRouter);
router.use('/auth', AuthRouter);
router.use('/members', MemberRouter);
router.use('/footer', FooterRouter);


// POST     api/v1/auth/login
// POST     api/v1/auth/register

// GET      api/v1/members/
// GET      api/v1/members/:id
// POST     api/v1/members/         [AUTH][ADMIN]
// PUT      api/v1/members/:id      [AUTH][ADMIN]
// DELETE   api/v1/members/:id      [AUTH][ADMIN]

// GET      api/v1/footer
// POST     api/v1/footer           [AUTH][ADMIN]
// PUT      api/v1/footer           [AUTH][ADMIN]
// DELETE   api/v1/footer           [AUTH][ADMIN]


export default router;