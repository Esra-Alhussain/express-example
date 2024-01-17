import express from 'express';
import data from './data/data.json'

const app = express();  //create a variable tat will hold copy of express
const PORT = 3000;

     app.listen(PORT, () =>  {    //listen to the port that we just created 
     console.log(`Yourr server is runing on port ${PORT}`);

     //load data file on the server
     console.log(data);
     });

     app.get('/item/end', (req,res) =>
     res.end()
     );

     app.get('/item/linkedin', (req,res) =>
     res.redirect('https://www.linkedin.com')
     );

     app.get('/images', (req,res) => 
     res.download('images/tent.jpg')
     );

   //not specifing the path before using the method, its going to be available in the default path / 
   app.use(express.static('public'));  //mention which folder are you using for static file

   //Create a specific path for images folder on path images 
   app.use('/item', express.static('images'));

   //route = provide you with the data or fille that you requested 
   //getting data == and response with data / take the path of that command and passing arguments (request & response)
   app.get('/', (req, res) => 
     //    res.send(` get a request with / route on port ${PORT}`)
     //get data first 
         res.json(data)  //response with the data
   );

   //created a route method that will pass /tem path and there is a get function within the route and passes the req and res
   app.route('item')
      .get((req, res) => {
          res.send(` a get request with /item route on port ${PORT}`)
      })
      //update 
      .put((req, res) => 
          res.send(`put request with /item route on port ${PORT}`)
      )
      
     //delete
     .delete((req,res) => 
          res.send(`delete request with /item route on port ${PORT}`)
     );


     //pass the request response
     //pass the id as number but it will be received as string 
   app.get('/item/:id', (req,res, next ) => {
     //make sure that i get what i want by passing the params 
     console.log(req.params.id);
     let user = Number(req.params.id) //convert the string from the params that i recive to number 
     console.log(user);
     console.log(data[user]); //get inside the JSON file and return the item that we requested, pull the user from it 
     res.send(data[user]);
     next();     //call next 
   },(req,res) =>   //here is the second function will start 
      console.log('Did you get the right data?')
   );

   //sending data to the server to the DB
   app.post('/item', (req,res) => 
        res.send(`post request with /newItem route on port ${PORT}`)
   );




