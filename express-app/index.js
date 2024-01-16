import express from 'express';
import data from './data/data.json'

const app = express();  //create a variable tat will hold copy of express
const PORT = 3000;

app.listen(PORT, () =>  {    //listen to the port that we just created 
   console.log(`Yourr server is runing on port ${PORT}`);

   //load data file on the server
   console.log(data);
});
   //not specifing the path before using the method, its going to be available in the default path / 
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

     //pass the request response
     //pass the id as number but it will be received as string 
   app.get('/item/:id', (req,res) => {
     //make sure that i get what i want by passing the params 
     console.log(req.params.id);
     let user = Number(req.params.id) //convert the string from the params that i recive to number 
     console.log(user);
     console.log(data[user]); //get inside the JSON file and return the item that we requested, pull the user from it 
     res.send(data[user]);
   })
   //sending data to the server to the DB
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



