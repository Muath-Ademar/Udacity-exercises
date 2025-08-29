import csv from 'csvtojson'
import express from 'express';
import { resolve } from 'path';
import { promises as fsPromises } from 'fs';


const filePath = 'C:/Users/Moath/OneDrive/Desktop/Udacity exersises/Express/Prepare a CSV/users.csv'
const newConvertedFile = 'users.json'
const resolvedPath = resolve(filePath)
const app = express();
const port = 3000;

// start the Express server
  app.get('/convert', (req,res)=>{
  csv()
  .fromFile(resolvedPath)
  .then((jsonObj)=>{
    for(const person of jsonObj){
      if (!person.phone){
        person.phone = 'missing data' 
      }
    }
    fsPromises.writeFile(newConvertedFile, JSON.stringify(jsonObj))
    console.log(jsonObj)
    res.send('File has been converted')
  })
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

