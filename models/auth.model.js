const res = require('express/lib/response')
const { conn } = require('../config/database') 

class AuthModel {
    signup(users) {
        return new Promise(function(resolve, reject) {
            const query = "insert into users set ? "
            //username: username, password: password
            conn.query(query, users , (err, result) => {
                if(err){
                    reject(err)
                }else {
                    resolve(result)
                }
            })
        })
    }

    signin(e_mail) {
        return new Promise(function(resolve, reject) {
            const query = "select * from users where email =?"
            conn.query(query, users , (err, result) => {
                if(err){
                    reject(err)
                }else {
                    if (result.length>0)
                        return resolve(result[0])
                    else {
                        return resolve(null)
                    }
                }
            })
        })
    }
}

module.exports = new AuthModel