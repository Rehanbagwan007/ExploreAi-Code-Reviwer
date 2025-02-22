import express from 'express'
import { aiResponse } from '../controllers/ai.controller.js'
export const Airouter = express.Router()


Airouter.route("/get-response").post(aiResponse)


