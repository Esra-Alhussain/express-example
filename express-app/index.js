import express from 'express';
import data from './data/data.json'

const app = express();  //create a variable tat will hold copy of express
const PORT = 3000;

app.listen(PORT, () =>  {    //listen to the port that we just created 
   console.log(`Yourr server is runing on port ${PORT}`);

   //load data file on the server
   console.log(data);
});

   //route = provide you with the data or fille that you requested 
   //take the path of that command and passing arguments (request & response)
   app.get('/', (req, res) => 
        res.send(` get a request with / route on port ${PORT}`)
   )