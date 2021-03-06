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
    let que = req.body;
    console.log('addquestion',que);
    //validate

    console.log(que);
  
    // db.collection('question').findOne({name:que.name},(err,result)=>{
    //   //console.log('found user',student);
    //   if(result)
    //   {
    //     let map={};
    //     map['status']='error';
    //     map['message']='question  already exists';
    //     res.send(map);
    //   }
    //   else
    //   {
        q=JSON.parse(que.question);
        db.collection('question').insertOne(q, (err, result) => {
          if (err) {
            res.send({status:'error'});
          } else {
            res.send({status:'success'});
          }
        });
  //      }
  //   });

  });

  app.post('/question/updatequestion', (req, res) => {
    console.log('updatequestion');
    let question = req.body;
    console.log(question);
    let _id = question._id;
        console.log(_id);
        delete question['_id'];
        db.collection('question').updateOne(
          { _id: new mongo.ObjectId(_id) },
          { $set: question },
          (err, result) => {
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
    let tags = (req.query['tags']||'').toLowerCase();
    let n=parseInt(req.query['n']);

    console.log('getquestionbytags',tags,n);
    console.log(req.query['n']);

    let tagarray=tags.split(',');

    db.collection('question').aggregate([{$match:{TagArray:{$all:tagarray}}},{$sample:{size:n}}]).toArray().then((docs)=>{
      //   console.log(docs);
        res.send(docs);
    });
  });
  //   db.collection('question').find({TagArray:{$all:tagarray}}).toArray().then((docs)=>{
  //     //   console.log(docs);
  //       res.send(docs);
  //   });
  // });

  // app.get('/question/getquestiontype', (req, res) => {
  //   console.log('getquestiontype');
  //   let que_type = req.body;

  //   db.collection('question').insertOne(que_type, (err, result) => {
  //     if (err) {
  //       res.send('error');
  //     } else {
  //       res.send('success');
  //     }
  //   });
  // });


  // app.post('/question/getoptions', (req, res) => {
  //   console.log('getoptions');
  //   let options = req.body;

  //   db.collection('question').insertOne(options, (err, result) => {
  //     if (err) {
  //       res.send('error');
  //     } else {
  //       res.send('success');
  //     }
  //   });
  // });
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