
function log(req, res, next){
   let url = `${req.protocol}://${req.get('host')}${req.originalUrl}`
    
    console.log(`Content loaded from ${url}`)
   
 //  if(req != "") {console.log(`${req}`)}
    next()
}



module.exports=(log)