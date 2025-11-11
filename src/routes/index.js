import Router from 'express';
// import UserRouter from '../routes/UserRouter.js';
import AuthRouter from '../routes/auth.routes.js';
import MemberRouter from '../routes/members.routes.js';


const router = new Router();

// [api]
// router.use('/users', UserRouter);
router.use('/auth', AuthRouter);
router.use('/members', MemberRouter);



// POST     api/v1/auth/login
// POST     api/v1/auth/register

// GET      api/v1/members/
// GET      api/v1/members/:id
// POST     api/v1/members/         [AUTH][ADMIN]
// PUT      api/v1/members/:id      [AUTH][ADMIN]
// DELETE   api/v1/members/:id      [AUTH][ADMIN]


export default router;