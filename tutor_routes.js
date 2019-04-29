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

  app.get('/admin/login', (req, res) => {
    let username = req.query['username'];
    let password = req.query['password'];

    let map = {};
    if (username === 'admin' && password === 'rootadmin') {
      map['status'] = 'success';
    } else {
      map['status'] = 'error';
    }
    console.log(map);
    res.send(map);
  });

  app.get('/tutor/login', (req, res) => {
    let username = req.query['username'];
    let password = req.query['password'];
    console.log(username, password);

    db.collection('tutor').findOne(
      { Username: username, Password: password },
      (err, result) => {
        let map = {};
        if (result) {
          map['status'] = 'success';
          map['tutor_name'] = result;
        } else {
          map['status'] = 'error';
        }
        console.log(map);
        res.send(map);
      }
    );
  });

  app.get('/tutor/deletetutor', (req, res) => {
    let id = req.query['id'];

    db.collection('tutor').deleteOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
        res.send('success');
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

  app.post('/tutor/updatetutor', (req, res) => {
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
