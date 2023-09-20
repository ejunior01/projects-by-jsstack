import { Router } from 'express'
import ContactController from './app/controller/ContactController.js'

const router = Router()

router.get('/contacts', ContactController.index)
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete)


export default router
