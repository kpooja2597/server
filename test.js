let mongo = require('mongodb');

module.exports = function(app, db) {
  app.get('/test/gettestbyid', (req, res) => {
    let id = req.query['id'];

    db.collection('test').findOne(
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

  app.get('/test/gettestbytags', (req, res) => {
    let tagstr = req.query['tags'];

    let tags=tagstr.split(',');

    db.collection('test').findOne(
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


  app.post('/test/addtest', (req, res) => {
    console.log('addtest');
    let addingtest = req.body;
    db.collection('test').insertOne(addingtest, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });

  app.get('/test/getdecsription', (req, res) => {
    console.log('getdecsription');
    let descr = req.body;

    db.collection('test').insertOne(descr, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });

  app.get('/question/getduration', (req, res) => {
    console.log('getduration');
    let dur = req.body;

    db.collection('test').insertOne(dur, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });

  app.get('/test/getnoofquestions', (req, res) => {
    console.log('getnoofquestions');
    let noofquestion = req.body;

    db.collection('test').insertOne(noofquestion, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });
}; //exports
