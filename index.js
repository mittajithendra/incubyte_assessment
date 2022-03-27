const sqlite3 = require("sqlite3").verbose();
var express = require("express");

var app = express();
app.use(express.json());



// db.run("CREATE TABLE wwords(id , word)");

// const sql = `INSERT INTO wwords(id, word) VALUES(?,?)`;
// db.run(sql,[1,"hello"],(err)=>{
//     if(err) return console.error(err.message);

//     console.log("new record inserted")
// });




require("./routes")(app);

app.listen(8000,function(req,res){
    console.log("App running at 8000")
})