import  express  from "express";

const app = express() 

const port = 8000

app.get('/api', (req, res)=>{
    res.send('Server is working')
})

app.listen(port, () => {
    console.log(`Server started at port: http://localhost:${port}`)
})