const jwt = require('jsonwebtoken')
const { jwtsecret } = require('../config')

function authValidation(req, res, next) {
	const bearer = req.headers.authorization
	if (bearer && bearer.startsWith('Bearer')) {
		const [, token] = bearer.split("Bearer ")
		if (token) {
			try {
				const decoded = jwt.verify(token, jwtsecret)
				console.log(decoded);
				req.user = decoded
				return next()
			} catch ({ message, name }) {
				return res.status(403).json({
					error: true,
					message,
					type: name
				})
			}
		}
	}
	return res.status(403).json({
		error: true,
		message: "insufficent permissions"
	})
}


function adminValidation(req, res, next) {
	if (req.user.role === 'Admin') {
		return next()
	}else{
        return res.status(403).json({
            error:true,
            message:"Insufficient permissions"
        })
	}
}

function applicantValidation(req,res,next){
    if(req.user.role==="Applicant"){
        return next()
    }else{
        return res.status(403).json({
            error:true,
            message:"Insufficient permissions"
        })
    }
}
function employerValidation(req,res,next){
    if(req.user.role==="Employer"){
        return next()
    }else{
        return res.status(403).json({
            error:true,
            message:"Insufficient permissions"
        })
    }
}
function employerAdminValidation(req,res,next){
    if(req.user.role==="Employer" || req.user.role==="Admin"){
        return next()
    }else{
        return res.status(403).json({
            error:true,
            message:"Insufficient permissions"
        })
    }
}

function authMiddleware(type){
    let middlewares
    if(type==="Employer"){
        middlewares=[authValidation,employerValidation]
    }else if(type==="employer-Admin"){
        middlewares=[authValidation,employerAdminValidation]
    }else if(type==="Applicant"){
        middlewares=[authValidation,applicantValidation]
    }else if(type==="Admin"){
        middlewares=[authValidation,adminValidation]
    }else{
        middlewares=[]
    }
	return middlewares
}

module.exports = authMiddleware