const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(__dirname + "/../passwords.db", (err) => {
    if(err)
    {
    console.log("Error Occurred - " + err.message);
    }
})

const selectQuery = 'SELECT * FROM passwords ;'
function dbAll(){
    return new Promise((resolve, reject) => {
        db.all(selectQuery , (err , data) => {
            if(err){
                if(err.errno  == 1){
                    console.log('need to create table first')
                }else{
                    console.log(err.message)
                }
                resolve()         
            }else{
                console.table(data)
                resolve()
            }
            });
    })
}
insertQuery = `INSERT INTO passwords(provider, username, password) VALUES(?,?,?)`
function dbInsert(provider, username, password) {
    return new Promise((resolve, reject) => {
    db.run(insertQuery,[provider, username, password], function(err) {
        if(err){
            if(err.errno  == 1){
                console.log('need to create table first')
            }else{
                console.log(err.message)
            }
            resolve() 
        }else{
        console.table([provider , username, password])
        console.log(`successfully inserted`);
        resolve()
        }
      })
    })
}

createTableQuery = `CREATE TABLE passwords (id INTEGER PRIMARY KEY,PROVIDER VARCHAR(40), USERNAME VARCHAR(40), PASSWORD VARCHAR(40))`
function createTable(){
    return new Promise((resolve, reject) => {
        db.run(createTableQuery,function(err){
            if(err){
                if(err.errno  == 1){
                    console.log('you have already created a table')
                }else{
                    console.log(err.message)
                }
                resolve()         
            }else{
                console.log('successfully created table')
                resolve()
            }
        })
    })
}

module.exports={db, dbAll, dbInsert, createTable}