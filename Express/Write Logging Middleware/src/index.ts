import express from 'express';

const app = express();
const port = 3000;




const loggingMiddleware = (req: express.Request, res: express.Response, next: Function): void =>{
  const url = req.url
  console.log(url)

  next()
}

app.get('/countries', loggingMiddleware, (req, res)=>{
  res.send('countries endpoint')
})

app.get('/teams',loggingMiddleware, (req, res)=>{
  res.send('teams endpoint')
})

app.get('/actors', (req, res) =>{
  res.send('actors endpoint')
})



// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});