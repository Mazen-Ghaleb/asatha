const express = require ('express');
const mysql = require('mysql');
const app = express();

const config = {
    host :"localhost",
    user :"root",
    password : "password",
    database : "test_db3",
}
/*
var pool = createPool({
    host :"localhost",
    user :"root",
    password : "password",
    database : "test_db3",
    port : "3306"
})
*/

async function query(sql, params){
    const connection = await mysql.createConnection(config);
    const [results,] = await connection.execute(sql, params);
    return results;
}
/*
connection.connect((err) => {
    if (err) {throw err}
    else {
        console.log("connected");
    }
})
*/
/*
app.get('/api', function(req,resp){
    connection.query('select * from tabletest' , (err,rows) => {
        if(!!err){
            console.log("Err in Q");
        }
        else {
        console.log(rows[0]);
        resp.status(200).send(rows[0]);
        resp.json({ message2: "this is the message from db.js" })
    }
    });
})



const port = process.env.port || 5005;
app.listen(port);
console.log("App is listening on port " + port);
*/

/*
app.get('/Home', function(req,resp){


    pool.query('select * from tabletest' , (err,rows) => {
        if(err){
            console.log("Err in Q");
        }
        else {
        console.log(rows[0]);
        resp.status(200).send(rows[0]);
        //resp.json({ message2: "this is the message from db.js" })
    }

  })
})

const port = process.env.port || 5005;
app.listen(port);
console.log("App is listening on port " + port);
*/

module.exports ={
    query
}