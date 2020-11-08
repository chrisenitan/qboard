
let vaidate = (req, res, next)=>{
   // var {cookies} = req
    console.log(`Pretend cookie was validated ${req.cookies.user}`)
    next()
}

module.exports=(vaidate)