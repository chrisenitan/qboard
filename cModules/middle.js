

function hello(req, res, next){
   let url = `${req.protocol}://${req.get('host')}${req.originalUrl}`
    
    console.log(`Content loaded from ${url}`)
    next()
}



module.exports=(hello)