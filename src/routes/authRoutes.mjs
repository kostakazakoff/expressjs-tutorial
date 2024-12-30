import { Router } from "express";
import { addUser, loginUser } from '../controllers/authController.mjs';
import { checkSchema } from 'express-validator';
import { createUserValidationSchema } from '../utils/validationSchemas.mjs';

const router = Router();

router.post('/api/register',
    checkSchema(createUserValidationSchema),
    addUser);

router.post('/api/login',
    loginUser);

export default router;