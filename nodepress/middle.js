

function hello(req, res, next){
   //let url = `${req.protocol}://${req.hostname}${req.originalUrl}`
    
   let url  = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(`Content loaded from ${url} ${req.hostname}`)
    next()
}



module.exports=( hello)