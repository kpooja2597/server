let mongo = require('mongodb');

module.exports = function(app, db) {
  app.get('/video/getvideobyid', (req, res) => {
    let id = req.query['id'];

    db.collection('video').findOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
        res.send(result);
      }
    );
  });

  app.post('/video/addvideo', (req, res) => {
    console.log('addvideo');
    let addvideo = req.body;
    db.collection('video').insertOne(addvideo, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });


  app.post('/video/updatevideo', (req, res) => {

    let request=req.body;
    let id = req.query['id'];

    db.collection('video').updateOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
          res.send("success");
      }
    );
  });

 app.get('/video/deletevideo', (req, res) => {
    let id = req.query['id'];

    db.collection('video').deleteOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
        res.send('success');
      }
    );
  });

  app.get('/video/getvideobytags', (req, res) => {
    let tagstr = req.query['tags'];

    let tags=tagstr.split(',');

    db.collection('video').findOne(
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

  app.get('/video/getallvideo', (req, res) => {
    console.log('getallvideo');
    let getallvideo = req.body;
    db.collection('video').findOne(getallvideo, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });

  
}; //exports
