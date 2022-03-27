const sqlite3 = require("sqlite3").verbose();
const cors = require('cors'); 
var express = require("express");


const port = process.env.PORT || 3000
var app = express();
app.use(express.json());
app.use(cors());


// db.run("CREATE TABLE wwords(id , word)");

// const sql = `INSERT INTO wwords(id, word) VALUES(?,?)`;
// db.run(sql,[1,"hello"],(err)=>{
//     if(err) return console.error(err.message);

//     console.log("new record inserted")
// });




require("./routes")(app);

app.listen(port,function(req,res){
    console.log("App running")
})