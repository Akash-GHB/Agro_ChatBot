import { Router } from 'express';
import { signUp, login } from '../controllers/auth.controller.js';

const router = Router();

// Define the routes for signup and login
router.post('/signup', signUp);
router.post('/login', login);

export default router;