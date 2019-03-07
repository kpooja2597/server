let mongo = require('mongodb');

module.exports = function(app, db) {
  app.get('/resources/getresourcesbyid', (req, res) => {
    let id = req.query['id'];

    db.collection('resources').findOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
        res.send(result);
      }
    );
  });

  app.post('/resources/addresources', (req, res) => {
    console.log('addresources');
    let addresources = req.body;
    db.collection('resources').insertOne(addresources, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });


  app.post('/resources/updateresources', (req, res) => {

    let request=req.body;
    let id = req.query['id'];

    db.collection('resources').updateOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
          res.send("success");
      }
    );
  });

 app.get('/resources/deleteresources', (req, res) => {
    let id = req.query['id'];

    db.collection('resources').deleteOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
        res.send('success');
      }
    );
  });

  app.get('/resources/getresourcesbytags', (req, res) => {
    let tagstr = req.query['tags'];

    let tags=tagstr.split(',');

    db.collection('resources').findOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
        if (result) {
          res.send(result);
        } else {
          res.send('error');
        }
      }
    );
  });

  app.get('/resources/getallresources', (req, res) => {
    console.log('getallresources');
    let getallvideo = req.body;
    db.collection('resources').findOne(getallvideo, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });

  
}; //exports
