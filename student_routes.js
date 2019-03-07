let mongo = require('mongodb');

module.exports = function(app, db) {
  app.get('/student/getstudent', (req, res) => {
    let id = req.query['id'];

    db.collection('student').findOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
        res.send(result);
      }
    );
  });

  app.get('/student/login', (req, res) => {
    let username = req.query['username'];
    let password = req.query['password'];

    db.collection('student').findOne(
      { username: username, password: password },
      (err, result) => {
        let map = {};
        if (result) {
          map['status']='success';
          map['user']=result;
          
        }
        else
        {
          map['status']='error';
          
        }
        console.log(map);
        res.send(map);
      }
    );
  });

  app.get('/student/deletestudent', (req, res) => {
    let id = req.query['id'];

    db.collection('student').deleteOne(
      { _id: new mongo.ObjectId(id) },
      (err, result) => {
        res.send('success');
      }
    );
  });

  app.post('/student/addstudent', (req, res) => {
    console.log('addstudent');
    let user = req.body;
    //validate

    console.log(user);
  
    db.collection('student').findOne({username:user.Username},(err,student)=>{
      console.log('found user',student);
      if(student)
      {
        let map={};
        map['status']='error';
        map['message']='username already exists';
        res.send(map);
      }
      else
      {
        db.collection('student').insertOne(user, (err, result) => {
          if (err) {
            res.send({status:'error'});
          } else {
          }
        });
          }
    });

  });

  app.post('/student/updatestudent', (req, res) => {
    console.log('updatestudent');
    let user = req.body;
    console.log(user);
    let _id = user._id;
    console.log(_id);
    delete user['_id'];

    db.collection('student').updateOne(
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

  app.post('/student/joinclass', (req, res) => {
    console.log('joinclass');
    let request = req.body;
    let studentid = request.studentid;
    let courseid = request.courseid;

    db.collection('student').findOne(
      { _id: new mongo.ObjectId(studentid) },
      (err, student) => {
        if (!student.courses) student.courses = [];

        student.courses.push(courseid);
        delete student['_id'];
        db.collection('student').updateOne(
          { _id: new mongo.ObjectId(studentid) },
          { $set: student },
          (err, result) => {
            if (err) {
              res.send('error');
            } else {
              res.send('success');
            }
          }
        );
      }
    );
  });

 
  app.get('/student/getallstudent', (req, res) => {
    console.log('getallstudent');
    let getallstudent = req.body;
    db.collection('student').findOne(getallstudent, (err, result) => {
      if (err) {
        res.send('error');
      } else {
        res.send('success');
      }
    });
  });

};
