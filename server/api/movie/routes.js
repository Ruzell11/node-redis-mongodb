import express from 'express'

const router = express.Router()


router.get('/' , (req , res) => {
    res.json({ message: 'Movie routes' });
})


export default {router}