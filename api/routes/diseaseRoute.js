import express from 'express'
import { prediction } from '../controllers/diseaseController.js'

const router = express.Router();

//create new Menu
router.post("/", prediction);

export default router;