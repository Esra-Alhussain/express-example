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

   
     //JSON data object 
     //{"hello": "JSON is cool"}, use the  middleware to ingest it and stringfy it to send it to the database 
     
     //URLEncoded data 
     //full path of the endpoint and at the end of it 
     //hello = URLEncoded+is+cool

     //method to use JSON
     app.use(express.json())
     //create the post and the url route that we need to do the post 
     app.post('/newItem', (req, res) =>{
          console.log(req.body);
          //response to the frontend 
          res.send(req.body);
     })
   //route = provide you with the data or fille that you requested 
   //getting data == and response with data / take the path of that command and passing arguments (request & response)
   app.get('/', (req, res) => 
     //    res.send(` get a request with / route on port ${PORT}`)
     //get data first 
         res.json(data)  //response with the data
   );

   //created a route method that will pass /tem path and there is a get function within the route and passes the req and res
   app.route('/item')
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
     //this is the middleware that pulls the data 
     //make sure that i get what i want by passing the params 
     console.log(req.params.id);
     let user = Number(req.params.id) //convert the string from the params that i recive to number 
     console.log(user);
     console.log(data[user]); //get inside the JSON file and return the item that we requested, pull the user from it 
     //add middleware that uses the req object
     console.log(`Request from: ${req.originalUrl}`)  //access the original URL from the request
     console.log(`Request type: ${req.method}`) //method of the request is a get 
     
     //everything above is the middleware before sending rhe response back
     res.send(data[user]);
     next();     //call next 
   },(req,res) =>   //here is the second function will start 
      console.log('Did you get the right data?')
   );

   //sending data to the server to the DB
   app.post('/item', (req,res) => 
        res.send(`post request with /newItem route on port ${PORT}`)
   );




