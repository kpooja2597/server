let mongo = require('mongodb');

module.exports = function(app, db) {
  app.get('/question/getquestionbyid', (req, res) => {
    let id = req.query['id'];

    db.collection('question').findOne(
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

  app.post('/question/addquestion', (req, res) => {
    console.log('addquestion');
    let que = req.body;
    //validate

    console.log(que);
  
    db.collection('question').findOne(que,(err,res)=>{
      //console.log('found user',student);
      if(res)
      {
        let map={};
        map['status']='error';
        map['message']='question  already exists';
        res.send(map);
      }
      else
      {
        db.collection('question').insertOne(que, (err, result) => {
          if (err) {
            res.send({status:'error'});
          } else {
            res.send({status:'result'});
          }
        });
          }
    });

  });

  app.post('/question/updatequestion', (req, res) => {
    console.log('updatequestion');
    let que = req.body;
    console.log(user);
  
    db.collection('question').updateOne(
      { _id: new mongo.ObjectId(_id) },(err, result) => {
        console.log(err,result);
        if (err) {
          res.send('error');
        } else {
          res.send('success');
        }
      }
    );
  });

  app.get('/question/getquestionbytags', (req, res) => {
    let tagstr = req.query['tags'];

    let tags=tagstr.split(',');

    db.collection('question').findOne(
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

  app.get('/question/getquestiontype', (req, res) => {
    console.log('getquestiontype');
    let que_type = req.body;

    db.collection('question').insertOne(que_type, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });


  app.post('/question/getoptions', (req, res) => {
    console.log('getoptions');
    let options = req.body;

    db.collection('question').insertOne(options, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });
}; //exports



  // app.post('/question/addquestion', (req, res) => {
  //   console.log('addquestion');
  //   let que = req.body;
  //   db.collection('question').insertOne(que, (err, result) => {
  //     if (err) {
  //       res.send('error');
  //     } else {
  //       res.send('success');
  //     }
  //   });
  // });