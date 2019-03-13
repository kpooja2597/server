let mongo = require('mongodb');

module.exports = function(app, db) {
  app.get('/coursecontent/getcoursebyid', (req, res) => {
    let id = req.query['id'];

    db.collection('coursecontent').findOne(
      { _id: new mongo.ObjectId(id)  },
      (err, result) => {
        res.send(result);
      }
    );
  });

  app.post('/coursecontent/addcoursecontent', (req, res) => {
    console.log('addcoursecontent');
    let addcoursecontent = req.body;
    db.collection('coursecontent').insertOne(addcoursecontent, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });


  app.post('/coursecontent/updatecoursecontent', (req, res) => {

    let request=req.body;
    let id = req.query['id'];

    db.collection('coursecontent').updateOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
          res.send("success");
      }
    );
  });

 app.get('/coursecontent/deletecoursecontent', (req, res) => {
    let id = req.query['id'];

    db.collection('coursecontent').deleteOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
        res.send('success');
      }
    );
  });

  app.get('/coursecontent/getcoursecontentbytags', (req, res) => {
    let tagstr = req.query['tags'];
    let tags=tagstr.split(',');

    db.collection('coursecontent').findOne(
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

  app.get('/coursecontent/findcoursecontentbytags', (req, res) => {
    let tagstr = req.query['tags'];

    let tags=tagstr.split(',');

    db.collection('coursecontent').findOne(
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

  app.get('/coursecontent/getallcoursecontent', (req, res) => {
    console.log('getallcoursecontent');
    let getallcoursecontent = req.body;
    db.collection('coursecontent').findOne(getallcoursecontent, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });

  
}; //exports
