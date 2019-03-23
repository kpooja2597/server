let express = require('express');
let BodyParser = require('body-parser');
let FileUpload = require('express-fileupload');
let MongoClient = require('mongodb').MongoClient;
let cors = require('cors');

let Routes = require('./routes');

MongoClient.connect('mongodb://localhost:27017', (err, dbconn) => {
  let db = dbconn.db('lp');

  let app = express();
  // let cors=cors();

  app.use(BodyParser.json());
  app.use(
    FileUpload({
      limits: { fileSize: 50 * 1024 * 1024 }
    })
  );
  app.use(cors());

  //let db={};

  // app.get("/index.html",(req,res)=>{
  //     res.send("Hello World");
  // });

  Routes(app, db);

  app.listen(9000, () => {
    console.log('server started.');
  });
});
