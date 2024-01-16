import express from 'express';
import data from './data/data.json'

const app = express();  //create a variable tat will hold copy of express
const PORT = 3000;

app.listen(PORT, () =>  {    //listen to the port that we just created 
   console.log(`Yourr server is runing on port ${PORT}`);

   //load data file on the server
   console.log(data);
});
   //if we did not specify the path before using the method, its going to be available in the default path / 
   app.use(express.static('public'));  //mention which folder are you using for static file

   //Create a specific path for images folder on path images 
   app.use('/images', express.static('images'));

   //route = provide you with the data or fille that you requested 
   //getting data == and response with data / take the path of that command and passing arguments (request & response)
   app.get('/', (req, res) => 
     //    res.send(` get a request with / route on port ${PORT}`)
     //get data first 
     res.json(data)  //response with the data
   );

   //sennding data to the server to the DB
   app.post('/newItem', (req,res) => 
        res.send(`post request with /newItem route on port ${PORT}`)
   );

   //put = update 
   app.put('/item', (req,res) => 
        res.send(`put request with /item route on port ${PORT}`)
   );

   //put = update 
   app.delete('/item', (req,res) => 
        res.send(`delete request with /item route on port ${PORT}`)
   );



