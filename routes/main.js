
const express = require('express'); //param body query
const mysql   = require('mysql')
const copy = require('../text.json')



//initislaize express
const approuter = express();


/* GCP
const sqldb = mysql.createConnection({
    host     : process.env.SQLServer,
    user     : 'admin_chris',
    password : 'process.env.GCPsqlPassword',
    database : 'nodepress'
});
? = query
: = params
form = body
*/


/* const sqldb = mysql.createConnection({
    host     : process.env.fhserver,
    user     : process.env.fhuser,
    password : process.env.fhpass,
	database : process.env.fhdb
});
 */

const sqldb = mysql.createConnection({
	host: process.env.gcpserver,
	user: process.env.gcpuser,
	password: process.env.gcppass,
	database: process.env.gcpdb,
  })

sqldb.connect((err) => {
    if(err){ throw err }
    console.log(`Connected to Main ${process.env.gcpserver} on thread: ${sqldb.threadId}`)
})

//HOME
approuter.get('/', (req, res) => {
    const act = req.query.act

    //check for cookie user
    if(req.cookies.user){
        let getUserByCookie = `SELECT * FROM profiles WHERE cookie = ` + sqldb.escape(req.cookies.user)
        sqldb.query(getUserByCookie, (err, userByCookie)=>{
            if (err) throw err
            if(Object.keys(userByCookie).length != 0){
                let username = userByCookie[0].username
                res.redirect(`/${username}`)
            }
            else{
                //remove possibly invalid user
                res.clearCookie("user")
                res.redirect("/")
            }
        })
    }
    else{
        if(act == "act"){
            let data = {
                ref: act,
                message: `Successful ${act}`
            }
            res.render("index", data)
        }
        else{
            res.render("index")
        }
    }
    
   
});


//LOG IN
approuter.get('/login', (req, res) => {
    var request = req.query

    //check if a request was sent to page
    if(request.a){
        console.log(`Redirected because ${request.a}`)
        switch (request.a) {
            case "userNotFound":
            let loginContent = {
                message: request.a,
                details: copy.userNotFound.details
            }
            res.render("login", loginContent);
            break;

            default:
            break;
        }
       
    }
    else{
        //check if cookie exists
        if(req.cookies.user){
            //get user from cookie
            let checkForUser = `SELECT * FROM profiles WHERE cookie =` + sqldb.escape(req.cookies.user);
            sqldb.query(checkForUser, (err, result)=>{
                if (err) throw err;
                
                if(Object.keys(result).length != 0){
                    let foundCookieUser = result[0]
                    res.redirect(`/${foundCookieUser.username}`)
                }

            })
        }
        //no cookie
        else{
            res.render("login")
        }
    }

});


//SIGN UP
approuter.get('/signup', (req, res) => {

	res.render("signup");

});


//LOAD PROFILE DEFAULT FOR ALL ROOT LINKS EXPECT DEFINED
approuter.get('/:username', (req, res) => {

    //set a return var
    const rt = req.query.rt

    var userFetchRef
    if(req.cookies.user){
        var userFetchRef = req.cookies.user
    }else{
        var userFetchRef = req.params.username
    }

    console.log(userFetchRef + " FETCH " + userFetchRef)
    let checkForUser = `SELECT * FROM profiles WHERE username =` + sqldb.escape(userFetchRef) + `OR cookie = ` + sqldb.escape(userFetchRef);
sqldb.query(checkForUser, (err, result)=>{
    if (err) throw err;
    if(Object.keys(result).length == 0){
        console.log("User not found: /username")
        res.clearCookie("user")
        res.redirect("/")
    }
    //user found
    else{
        //set userdata
        let foundUser = result[0]
        if(rt){
            switch (rt) {
                case "d":
                    foundUser.qReturn = "Question has been deleted"
                    break;
                case "update":
                    foundUser.qReturn = "Account successfully updated"
            
                default:
                    break;
            }
        }

        //get user questions data
        let getUserQuestions = `SELECT * FROM questions WHERE ownerID = ${result[0].id}`
        sqldb.query(getUserQuestions, (err, allUserQuestions)=>{
            if(err) throw err;
            if(Object.keys(allUserQuestions).length != 0){
                //questions exists
                let userQuestions = allUserQuestions
                console.log(userQuestions)
                //set new question object to user data
                foundUser.questions = userQuestions
            }
            else{
                //no question found
            }
            console.log(foundUser)
           
            //own page visit login cookie user
            if(req.cookies.user != undefined){
                foundUser.self = true
                res.render("profile", foundUser)
            }
            //not a cookie user, must be public page visit?
            else{
                res.render("profile", foundUser)
            }
         
        })
      
    }
})   

});



//update profile
approuter.post('/:username', (req, res) => {
    //get form data
    let currentUser = req.params.username
    let newUserData = req.body
    let userBrowserCookie = req.cookies.user

    //if cookie is available
    if(userBrowserCookie){
        //verify cookie is equal
        let verifyCookie = `SELECT * FROM profiles WHERE cookie = ` + sqldb.escape(userBrowserCookie) + `AND username = ` + sqldb.escape(currentUser)
        sqldb.query(verifyCookie, (err, safeCookie)=>{
            if (err) throw err
            if(Object.keys(safeCookie).length != 0){
    
                sqldb.query('UPDATE profiles SET name = ?, username = ?, dob = ?, hint = ? WHERE cookie = ?', [`${newUserData.accountname}`, `${newUserData.username}`, `${newUserData.dob}`, `${newUserData.hint}`, `${userBrowserCookie}`], (err, result, fields)=>{
                    if(err) throw err;
                    //now we have to refetch teh user data and render profile page as placeholder

                    let getUpdatedUser = `SELECT * FROM profiles WHERE cookie = ` + sqldb.escape(userBrowserCookie) + `AND username = ` + sqldb.escape(newUserData.username)
                    sqldb.query(getUpdatedUser, (err, gottenNewUser)=>{
                        if (err) throw err
                        if(Object.keys(gottenNewUser).length != 0){
                            console.log("Successful account update and fetch")
                            let fetchedNewUserData = gottenNewUser[0]
                            fetchedNewUserData.self = true
                            res.redirect(`/${gottenNewUser[0].username}?rt=update`)
                        }
                        else{
                            console.log("Could not fetch account that was just saved :( retry")
                            res.json({
                                newUserData,
                                message: "not successful fetch"
                            })
                        }
                    })
                }) 
            }
            else{
                //cookie and username dont match
                console.log("cookie and username does not match")
                res.send("cookie and username does not match")
            }
        })


       
    }
    else{
        //cookie not in browser while update was requested, strange.
    }



})


//explore tags and other topics
approuter.get("/explore", (req, res)=>{

})

//faq route to get wth parans code
approuter.get("/faq/:code", (req, res)=>{
    let reqCode = req.params.code

    if(reqCode){
        let checkCode = `SELECT * FROM faq WHERE code = ` + sqldb.escape(reqCode)
        sqldb.query(checkCode, (err, codeDetails)=>{
            if (err) throw err
            if(Object.keys(codeDetails).length != 0){
                let codeData = codeDetails[0]
                res.render("account/faq", codeData)
            }
            else{
                //nothing found on code given
                let getDefaultErrorCode = `SELECT * FROM faq WHERE code = 'ERCD1' `
                sqldb.query(getDefaultErrorCode, (err, errCode)=>{
                    let codeData = errCode[0]
                    res.render("account/faq", codeData)
                })
            }
        })
    }
    //no code given. load page normally
    else{

    }
 
})


module.exports = approuter;
