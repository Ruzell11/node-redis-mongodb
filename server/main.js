import express from 'express'

const app = express()

const port = 8000


app.get('/' , (req , res) => {
    res.send('<h2>Hello ssss</h2>')
})

app.listen(port , () => console.log(`Listening on port ${port}`))