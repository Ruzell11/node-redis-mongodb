import express from 'express'
import controller from './controller'

const router = express.Router()


router.get('/' , (req , res) => controller.getMovieList(req , res))


export default {router}