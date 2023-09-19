import { Router } from 'express';
import ContactController from './app/controller/ContactController.js';


const router = Router();

router.get('/contacts', ContactController.index);


export default router

