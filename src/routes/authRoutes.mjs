import { Router } from "express";
import { addUser, loginUser } from '../controllers/authController.mjs';
import { checkSchema } from 'express-validator';
import { createUserValidationSchema, loginUserValidationSchema } from '../utils/validationSchemas.mjs';

const router = Router();

router.post('/api/register', checkSchema(createUserValidationSchema), addUser);
router.post('/api/login', checkSchema(loginUserValidationSchema), loginUser);

export default router;