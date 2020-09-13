
let log = (req, res, next)=>{
   let url = `${req.protocol}://${req.get('host')}${req.originalUrl}`
    
    console.log(`Content loaded from ${url}`)
    next()
}



module.exports=(log)