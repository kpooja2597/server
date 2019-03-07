let mongo=require('mongodb');

module.exports=function(app,db){
app.get('/testresult/getresult', (req, res) => {
    let id = req.query['id'];

    db.collection('testresult').findOne(
    );
  });
};