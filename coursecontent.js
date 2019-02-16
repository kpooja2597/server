let mongo = require('mongodb');

module.exports = function(app, db) {
  app.get('/coursecontent/getcourse', (req, res) => {
    let id = req.query['id'];

    db.collection('coursecontent').findOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
        res.send(result);
      }
    );
  });

  app.get('/coursecontent/uploadcoursecontent', (req, res) => {

    let request=req.body;
    let url=request.url;
    let title=request.title;
    let courseid=request.courseid;
    let description=request.description;

    let id = req.query['id'];

    db.collection('coursecontent').deleteOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
          res.send("success");
      }
    );
  });

  
  
}; //exports
