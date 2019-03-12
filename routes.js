let StudentRoutes=require("./student_routes");
let TutorRoutes=require("./tutor_routes");
let QuestionRoutes=require("./question");
let VideoRoutes=require("./video");
let ResourcesRoutes=require("./resources");
let TestRoutes=require("./test");
let CourseContentRoutes=require("./coursecontent");
let Category=require("./category");
module.exports=function(app,db){

    StudentRoutes(app,db);
    TutorRoutes(app,db);
    QuestionRoutes(app,db);
    VideoRoutes(app,db);
    ResourcesRoutes(app,db);
    TestRoutes(app,db);
    CourseContentRoutes(app,db);
    Category(app,db);
}