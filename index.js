import app from "./server.js";
import mongodb from "mongodb";
 import ReviewsDAO from "./dao/reviewsDAO.js"
const MongoClient = mongodb.MongoClient;
 const mongo_username = process.env['MONGO_USERNAME']
 const mongo_password = process.env['MONGO_USERNAME']

 ///const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.3xy0j1t.mongodb.net/?retryWrites=false&appName=Cluster0`;
 const uri = `mongodb+srv://bhuvan:hYoMkk3lZnwnSfPA@cluster0.3xy0j1t.mongodb.net/?retryWrites=false&appName=Cluster0`;

 const port = 8000; 
              
 MongoClient.connect(
    uri,
    {
      maxPoolSize: 50,
      wtimeoutMS: 2500,
    //   useNewUrlParser: true  
    }
 )
 .catch(err => {
    console.error(err.stack)
    process.exit(1)
 })
 .then(async client => {
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listining on port ${port}`);
    })
 })




