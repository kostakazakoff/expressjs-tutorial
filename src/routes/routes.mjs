import authRoutes from './authRoutes.mjs';
import { Router } from 'express';

const router = Router();

router.use(authRoutes);

export default router;