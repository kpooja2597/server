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

  app.get('/video/getvideolist',(req,res)=>{
      const tags=(req.query['tags']||'').toLowerCase();
      const tagarray=tags.split(',');
      console.log('getvideolist tagarray',tagarray)

      db.collection('video').find({TagArray:{$all:tagarray}}).toArray().then((docs)=>{
          console.log(docs);
          res.send(docs);
      });
  });
};
