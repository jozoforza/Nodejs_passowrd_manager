console.log("im js script")
const prompt = require('prompt-sync')({sigint: true});
const sqlite3 = require('sqlite3').verbose();
const {db, dbAll, dbInsert, createTable} = require('./mudules/db')


async function startApp(){
while(true){
    const input = prompt("pManager> ");
    switch (input) {
        case "exit":
            console.log("exiting...")
            return
        case "all":
            console.log('quering...')
            await dbAll()
            break
        case "new":
            const provider = prompt("provider: ");
            const username = prompt("username: ");
            const password = prompt("password: ");
            await dbInsert(provider,username,password)
            break
        case "newTable":
            await createTable()
            break
        default:
            console.log(`no such command as: ${input}`)
            break
    }
}}

startApp()
