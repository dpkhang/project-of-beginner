const res = require('express/lib/response')
const {conn} = require('../config/database')


class productsModel{
    add(products){
        return new Promise(function(resolve, reject){
            const query = "insert into products set ?"
            conn.query(query, products,(err, result) => {
                if(err) {
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        })
    }
}

module.exports = new productsModel