
let authPost = (req, res, next)=>{
   // var {cookies} = req
   if(req.cookies.user){
    console.log(`Post is authorised here ${req.cookies.user}`)
   }

   //check db and make sure user has 1 to 1 ratio of post and question
   authPost.status = "true"
    next()
}

module.exports=(authPost)