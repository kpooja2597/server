let mongo=require('mongodb');
module.exports=function(app,db)
{
    app.get('/category/getcategory', (req, res) => {
        let id = req.query['id'];
    
        db.collection('category').findOne(
          { _id: new mongo.ObjectId(id) },
          (err, result) => {
            res.send(result);
          }
        );
      });

      app.post('/category/addcategory', (req, res) => {
        console.log('addcategory');
        let addingtest = req.body;
        db.collection('category').insertOne(addingtest, (err, result) => {
          if (err) {
            res.send('error');
          } else {
            res.send('success');
          }
        });
      });

      app.get('/category/deletecategory', (req, res) => {
        let id = req.query['id'];
    
        db.collection('category').deleteOne(
          { _id: new mongo.ObjectId(id) },
          (err, result) => {
            res.send('success');
          }
        );
      });
    
     
      app.post('/category/updatecategory', (req, res) => {
        console.log('updatecategory');
        let user = req.body;
        console.log(user);
        let _id = user._id;
        console.log(_id);
        delete user['_id'];
        db.collection('category').updateOne(
          { _id: new mongo.ObjectId(_id) },
          { $set: user },
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
}
