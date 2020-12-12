
const express = require('express'); //param body query
const mysql   = require('mysql')



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


const sqldb = mysql.createConnection({
    host     : process.env.fhserver,
    user     : process.env.fhuser,
    password : process.env.fhpass,
	database : process.env.fhdb
});

sqldb.connect((err) => {
    if(err){ throw err }
    console.log(`Connected to Main ${process.env.fhserver} on thread: ${sqldb.threadId}`)
})

//HOME
approuter.get('/', (req, res) => {
    const act = req.query.act
    switch (act) {
        case "act":
            let data = {
                ref: act,
                message: `Successful ${act}`
            }
            res.render("index", data)

        break;

        default:
            res.render("index")

    }
});


//LOG IN
approuter.get('/login', (req, res) => {
    var request = req.query

    //check if a request was sent to page
    if(Object.keys(request).length != 0){
       console.log(`Redirected because ${request.message}`)
       res.render("login",request);
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
            res.render("login");
        }
    }

});


//SIGN UP
approuter.get('/signup', (req, res) => {

	res.render("signup");

});


//LOAD PROFILE DEFAULT FOR ALL ROOT LINKS EXPECT DEFINED
approuter.get('/:username', (req, res) => {
    //check if own profile or not

    let userUsername = req.params.username

    if(req.cookies.user != undefined){
        //login cookie user
        let userCookie = req.cookies.user
        console.log(userCookie + " cookie: " + userUsername)
        let checkForUser = `SELECT * FROM profiles WHERE username =` + sqldb.escape(userUsername) + `AND cookie = ` + sqldb.escape(userCookie);
    sqldb.query(checkForUser, (err, result)=>{
        if (err) throw err;
        
        //all these are already done on main route. we should just collect the object or check if its a login or url vivist
        if(Object.keys(result).length == 0){
            console.log("User not found.")
            res.status(204).json({
                message:"no user found"
            })
        }
        //user found
        else{
           console.log(result)
           let foundUser = result[0]
           foundUser.self = true
           res.render("profile", foundUser)
        }
    })
    }

    //not a cookie user, must be public page visit?
    else{
        let checkForUser = `SELECT * FROM profiles WHERE username =` + sqldb.escape(userUsername)
    sqldb.query(checkForUser, (err, result)=>{
        if (err) throw err;
        
        //all these are already done on main route. we should just collect the object or check if its a login or url vivist
        if(Object.keys(result).length == 0){
            console.log("User not found: main")
            res.redirect("/login?message=userNotFound")
        }
        //user found
        else{
           console.log(result)
           let foundUser = Object.assign(result[0], ["name","username","","hint","","","image",""])
           res.render("profile", foundUser)
        }
    })  
    }
    
    
   

    

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

                    /* placeholder.profileUpdated = true
                    let placeholder = result[0]
                    res.render("profile", placeholder); 
                    */
                    res.json({
                        newUserData
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
        //cookie not in browser while update wa srequested.
    }



})


//explore tags and other topics
approuter.get("/explore", (req, res)=>{

})



module.exports = approuter;
