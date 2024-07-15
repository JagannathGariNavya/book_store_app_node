export default function(roles){
    return function(req,res,next){
        if(!roles.includes(req.user.role) ){
            return res.status(403).send('Access Denaied');
        }
        next();
    }
}