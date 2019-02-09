let StudentRoutes=require("./student_routes");
let TutorRoutes=require("./tutor_routes");

module.exports=function(app,db){

    StudentRoutes(app,db);
    TutorRoutes(app,db);

}