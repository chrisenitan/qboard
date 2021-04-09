const mysql = require('mysql')
const sqldb = mysql.createConnection({
    host     : process.env.fhserver,
    user     : process.env.fhuser,
    password : process.env.fhpass,
	database : process.env.fhdb
});

sqldb.connect((err) => {
    if(err){ throw err }
    console.log(`Connected to Settings ${process.env.fhserver} on thread: ${sqldb.threadId}`)
})

let authPostCreate = (req, res, next)=>{
   // var {cookies} = req
   if(req.cookies.user){
    console.log(`Post is authorised here ${req.cookies.user}`)
   }
   //check db and make sure user has 1 to 1 ratio of post and question
   let getAccountPostRecord = `SELECT * FROM profiles WHERE email = 'sample@test.com'`
     sqldb.query(getAccountPostRecord, (err, accountPostRecord)=>{
       if(err) throw err
       if(Object.keys(accountPostRecord).length != 0){
           console.log(accountPostRecord[0])
           let userDetails = accountPostRecord[0]
           //
           if(userDetails.token == "ChrisToken"){
            authPostCreate.status = true
           }
           else{
            authPostCreate.status = false
           }
       }
   })
   
    next()
}

module.exports=(authPostCreate)