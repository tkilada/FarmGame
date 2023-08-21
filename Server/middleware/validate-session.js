const jwt = require('jsonwebtoken')
const User = require('../models/user.model')


const validateSession = async(req,res,next) =>{
    try{
        const token = req.headers.authorization
        const decodedToken = await jwt.verify(token,process.env.JWT)
        console.log('decodedToken',decodedToken)
        const user = await User.findById(decodedToken.id)
        if(!user){
            throw Error("user not found")
        }
        req.user = user
        return next()
    }catch(error){
        res.json({message:error.message})
    }
}
module.exports = validateSession