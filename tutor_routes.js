let mongo = require('mongodb');

module.exports = function(app, db) {
  app.get('/tutor/gettutor', (req, res) => {
    let id = req.query['id'];

    db.collection('tutor').findOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
        res.send(result);
      }
    );
  });

  app.get('/tutor/deletetutor', (req, res) => {
    let id = req.query['id'];

    db.collection('tutor').deleteOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
          res.send("success");
      }
    );
  });

  app.post('/tutor/addtutor', (req, res) => {
    console.log('addtutor');
    let user = req.body;
    db.collection('tutor').insertOne(user, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });

  app.post('/student/updatetutor', (req, res) => {
    console.log('addtutor');
    let user = req.body;
    let _id = user._id;
    delete user['_id'];

    db.collection('tutor').updateOne(
      { _id: _id },
      { $set: user },
      (err, result) => {
        if (err) {
          res.send('error');
        } else {
          res.send('success');
        }
      }
    );
  });
}; //exports
