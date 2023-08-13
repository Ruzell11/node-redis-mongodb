import express from 'express'
import connectDatabase from './database'

const app = express()

const port = process.env.PORT 
connectDatabase()

app.get('/' , (req , res) => {
    res.send('<h2>Hello World</h2>')
})

app.listen(port , () => console.log(`Listening on port ${port}`))