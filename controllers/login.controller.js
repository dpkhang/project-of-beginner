const authModel = require("../models/auth.model")



const form = (req, res)=>{
    res.render('pages/login',{
        css: "sign-in.css", 
        title:'Login | Fishes Shop'
    })


}


const signin=(req, res)=>{

}

module.exports = {
    form,
    signin
}