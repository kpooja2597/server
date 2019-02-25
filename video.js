    let mongo = require('mongodb');

module.exports = function(app, db) {
  app.post('/video/addvideo', (req, res) => {
    const v = req.body;

    db.collection('video').insertOne(v, (err, result) => {
      if (err) {
        res.send({ status: 'error', message: error.message });
      } else {
        res.send({ status: 'success' });
      }
    });
  });

  app.get('/video/getvideolist',(req,res)=>{
      const tags=(req.query['tags']||'').toLowerCase();
      const tagarray=tags.split(',');

      db.collection('video').find({TagArray:{$all:tagarray}}).toArray().then((docs)=>{
        //   console.log(docs);
          res.send(docs);
      });
  });
};
