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
    console.log('updateresources');
    let resources=req.body;
    console.log('resources');
    let _id = resources._id;
    console.log(_id);
    delete resources['_id'];
    db.collection('resources').updateOne(
    {_id: new mongo.ObjectId(_id)},
    {$set: resources},
    (errr,result)=>{
      console.log(err,result);
      if(err){
        res.send('error');
      }else{
        res.send('success');
      }
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
    let tags = (req.query['tags']||'').toLowerCase();

    let tagarray=tags.split(',');
    
    db.collection('resources').find({TagArray:{$all:tagarray}}).toArray().then((docs)=>{
        res.send(docs);
    });
  });

  app.get('/resources/getallresources', (req, res) => {
    console.log('getallresources');
    let getallvideo = req.body;
    db.collection('resources').find({}).toArray().then((docs) => {
        res.send(docs);
    });
  });

  
}; //exports
