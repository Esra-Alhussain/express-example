import express from 'express';
import data from './data/data.json'

const app = express();  //create a variable tat will hold copy of express
const PORT = 3000;

app.listen(PORT, () =>   //listen to the port that we just created 
   console.log(`Yourr server is runing on port ${PORT}`)
);