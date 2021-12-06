const dotenv = require('dotenv')
const mysql = require('mysql')

dotenv.config()

const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DB
})

const connect = ()=>{
    conn.connect((err)=>{
        if(err){
            console.error(err)
            consloe.log('connection is failed!')
            process.exit(1)
        }
        console.log('connection is established')
    })
}

module.exports = {
    conn,
    connect
}