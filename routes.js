let StudentRoutes=require("./student_routes");
let TutorRoutes=require("./tutor_routes");
let QuestionRoutes=require("./question");
let VideoRoutes=require("./video");

module.exports=function(app,db){

    StudentRoutes(app,db);
    TutorRoutes(app,db);
    QuestionRoutes(app,db);
    VideoRoutes(app,db);

}