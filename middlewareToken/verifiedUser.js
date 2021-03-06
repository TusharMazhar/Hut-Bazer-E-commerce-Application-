const jwt =require('jsonwebtoken');


const verifiedUser=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token) return res.status(401).send('Access denied');
    try{
        const verified=jwt.verify(token,process.env.SECRET_KEY);
        req.user=verified;
        next();

    }catch(err){

        res.status(401).send(err)

    }
}
module.exports=verifiedUser;