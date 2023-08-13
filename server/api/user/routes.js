import express from 'express'
import controller from './controller';

const router = express.Router()


router.get('/' , (req , res) => controller.userRegister(req , res))


export default {router}