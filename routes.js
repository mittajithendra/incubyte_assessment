const sqlite3 = require("sqlite3").verbose();
const { v4: uuidv4 } = require('uuid');

module.exports = function(app){
    app.get("/",function(req,res){
        
        const db = new sqlite3.Database("words.db",sqlite3.OPEN_READWRITE,(err)=>{
            if(err) return console.error(err.message);
            console.log("connecton successfull")
        })

        const sql = "SELECT * from wwords";
        db.all(sql,[],(err,rows)=>{
            if(err) {
                res.send({rc:{returnCode:2,errorMessage:"Sorry Something went wrong"}});
                res.end();
                return console.error(err.message);
            }
            res.send({...rows});
            res.end()
        });

        db.close((err)=>{
            if(err) return console.error(err.message);
        });
    })


    app.post("/",function(req,res){
        const db = new sqlite3.Database("words.db",sqlite3.OPEN_READWRITE,(err)=>{
            if(err) return console.error(err.message);
            console.log("connecton successfull")
        })
        const uid = uuidv4();
        const { word } = req.body;
        const sql = `INSERT INTO wwords(id, word) VALUES(?,?)`;
        db.run(sql,[uid,word],(err)=>{
            if(err) return console.error(err.message);
            
            res.send({rc:{returnCode:0,errorMessage:""}});
            res.end();
        });



        db.close((err)=>{
            if(err) return console.error(err.message);
        });
    })


}