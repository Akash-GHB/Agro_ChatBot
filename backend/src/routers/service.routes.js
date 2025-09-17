import { Router } from 'express';
import { chat } from '../controllers/service.controller.js';
const router = Router();
router.post('/chat', chat);
// router.post('/voice', voice);
export default router;