const { post } = require("../routers/home.route")
const authModel = require("../models/auth.model")

const form = (req, res)=>{
    res.render('pages/signup',{
        css: "sign-up.css", 
        title:'Sign up | Fishes Shop'
    })
}

const signup = async  (req, res)=>{  
    // post: req.body.name-> name bên html
    ///get: req.query.name
    // const email = req.body.email
    // const password = req.body.password
    const {email,password} = req.body

    const user = {
        email,
        password
    }
    
    const result = await authModel.signup(user)
    if(result) {
        return res.send({message: 'Successfully!'})
    }
    return res.send({message: 'Unsuccessfully!'})
}

module.exports = {
    form,
    signup
}