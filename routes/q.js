
const express = require('express'); //param body query
const mysql = require('mysql')

//initislaize express and allow access to parent params
const approuter = express.Router({mergeParams:true});


/* GCP
const sqldb = mysql.createConnection({
    host     : process.env.SQLServer,
    user     : 'admin_chris',
    password : 'process.env.GCPsqlPassword',
    database : 'nodepress'
});
*/


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

//create new question
approuter.get("/new", (req, res)=>{
    //cookie verify user can do this action
    if(req.cookies.user){
        console.log("You can make a new post")
        res.render("question/new")
    }
    else{
        res.redirect("/")
    }


})


//Save new Question object as: id	questions	datePosted	lastEdit	refID	ownerID	ownerUsername
approuter.post('/create', (req, res) => {

    //check for bot
    if(req.body.bt != "" || req.cookies.user == undefined){
        console.log(`${rawQuestion.bt} Bot found`)
    }
    else{
        //make a secure random string
        var qRef = "";
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(var i = 0; i < 7; i++){
            qRef += chars.charAt(Math.floor(Math.random(52) * chars.length))
        }
        var nDate = new Date()
        var cM = nDate.getMonth() + 1
        var cD = nDate.getDate()
        var cY = nDate.getFullYear()
        //create question object
        var question = {
            q: req.body.q,
            datePosted: `${cM}-${cD}-${cY}`,
            lastEdit: `${cM}-${cD}-${cY}`,
            refID: qRef
        }
        //get user from cookie
        let getCookieUser = `SELECT * FROM profiles WHERE cookie = ` + sqldb.escape(req.cookies.user)
        sqldb.query(getCookieUser, (err, cookieUser)=>{
            if(err) throw err
            if(Object.keys(cookieUser).length != 0){
                question.ownerID = cookieUser[0].id
                question.ownerUsername = cookieUser[0].username
            }
            console.log(question)
        
            //save question to db
            let postQuestion = `INSERT INTO questions set ?`
            sqldb.query(postQuestion, question, (err, result, fields)=>{
                if (err) throw err
                question.id = result.insertId
                console.log(`you asked: ${req.body.q} and you ref is ${qRef} and your question ID is ${question.id}`)
                res.redirect(`/q/${qRef}?s=new`)
            })
            
         }) 
    }

});

//VIEW Question via params
approuter.get('/:refID', (req, res) => {
    let qid = req.params.refID

    //get requested question
    let getQuestion = `SELECT * FROM questions WHERE refID =` + sqldb.escape(qid)
    sqldb.query(getQuestion, (err, result)=>{
        if(err) throw err
        if(Object.keys(result).length != 0){
            console.log("Question found")
            let question = result[0]

            //get question posters username
            //this is done to allow traceable questions even if user changes username. 
            let questionOwnerData = `SELECT * FROM profiles WHERE id = '${question.ownerID}'` 
            sqldb.query(questionOwnerData, (err, ownerData)=>{
                if(err) throw err
                if(Object.keys(ownerData).length != 0){
                    console.log(`latest username is ${ownerData[0].username}`)
                }
            //set username to latest username and other question data
            if(req.query.s){question.new = true}
            question.ownerUsername = `${ownerData[0].username}`
            
            //update question views count
            let newViews = question.views + 1
            let updateQuestion = `UPDATE questions SET views = ${newViews} WHERE refID = '${qid}'`
            sqldb.query(updateQuestion, (err, updatedQ)=>{
                if(err) throw err
                console.log(`views updated ${newViews}`)
            })

            //render question finally
            res.render("question/home", question)
        })
        }
        //searched for question but none found
        else{
            let noData = {
                message: "Question not found"
            }
            res.render("question/home", noData)
        }
    })

});


//Question data in more details
approuter.get('/data/:id', (req, res) => {
    let id = req.params.id

    let getQuestionData = `SELECT * FROM questions WHERE refID =` + sqldb.escape(id)
    sqldb.query(getQuestionData, (err, result)=>{
        if (err) throw err
        if(Object.keys(result).length != 0){
            console.log(result[0])
            //set a valid state to avoid direct url hits failures
            result[0].valid = true
            res.render("question/data", result[0])
        }
    })

});

//delete question
approuter.get("/delete/:id", (req, res)=>{
    //check for cookie
    if(req.cookies.user == undefined){
        console.log(`Cookie User not found: delete/q`)
    }
    else{
        let deletePost = `DELETE FROM questions WHERE refID = '${req.params.id}'`
        sqldb.query(deletePost, (err, result)=>{
            if (err) throw err
            if(Object.keys(result).length != 0){
                console.log(`${req.params.id} Deleted: Confirm ${result.affectedRows}`)
                //get current user
                let currentUser = `SELECT * FROM profiles WHERE cookie = ` + sqldb.escape(req.cookies.user)
                sqldb.query(currentUser, (err, response)=>{
                    if (err) throw err
                    res.redirect(`/${response[0].username}?rt=d`)
                })
            }
        })
    }
    //send back to profile page. 
})


//edit your question.. how do we keep intergity here?: we keep the old one as title. each old one each change is title
approuter.get("/edit/:id", (req, res)=>{
    //only if logged in
    if(req.cookies.user != undefined){
        //only if question belongs to logged in user
        //get user
        let getLoggedInUser = `SELECT * FROM profiles WHERE cookie = '${req.cookies.user}'`
        sqldb.query(getLoggedInUser, (err, retLoggedInUser)=>{
            if(err) throw err
            if(Object.keys(retLoggedInUser).length != 0){
                let loggedInUser = retLoggedInUser[0]

                //verify question and user association
                let getQuestionData = `SELECT * FROM questions WHERE ownerID = '${loggedInUser.id}' AND refID =` + sqldb.escape(req.params.id)
                sqldb.query(getQuestionData, (err, questionData)=>{
                    if(err) throw err
                    if(Object.keys(questionData).length != 0){
                        console.log(questionData[0])
                        res.render("question/editQuestion", questionData[0])
                    }
                })
                
            }
            //did not find cookie user
            else{
                //could not find user logged in
            }
        })
    }
    //nobody is not logged in
    else{
        console.log(`Cookie User not found: delete/q`)
        res.send("Cookie User not found: delete/q")
    }

    //js array push for new comments? do we want to support this
})

//update question
approuter.post("/update", (req, res)=>{

    //get and verify user
    if(req.cookies.user){
        let verifyUser = `SELECT * FROM profiles WHERE cookie = ` + sqldb.escape(req.cookies.user) + `AND username = ` + sqldb.escape(req.body.username)
        sqldb.query(verifyUser, (err, userToVerify)=>{
            if (err) throw err
            if(Object.keys(userToVerify).length != 0){
                console.log(`Cookie User found: update/q`)
                console.log(`${req.body.username} found with cookie ${req.cookies.user} and can update question`)
            }
            else{
                res.send(`No correlation between cookie and usrname, bounce`)
            }
            //get question and verify it belongs to this user
            let verifyQuCon= `SELECT * FROM questions WHERE refID = ` + sqldb.escape(req.body.refID)
            sqldb.query(verifyQuCon, (err, quCon)=>{
                if(Object.keys(quCon).length != 0){
                    //check for connection
                    if(quCon[0].ownerID == userToVerify[0].id){
                        console.log(`${req.body.username} found with cookie ${req.cookies.user} and can update question and ${quCon[0].ownerID} is equal to ${userToVerify[0].id} for sure can update`)
                        //update question
                        let updateQuestion = `UPDATE questions SET q = '${req.body.q}' WHERE refID = '${req.body.refID}'`
                        sqldb.query(updateQuestion, (err, doneUpdating)=>{
                            if (err) throw err
                            if(doneUpdating.changedRows != 0 && doneUpdating.changedRows == 1){
                                console.log('changed ' + doneUpdating.changedRows + ' rows');
                                res.redirect(`/q/${quCon[0].refID}`)
                            }
                        })
                    }
                }
            })
        })
    }else{
        console.log(`Cookie User not found: update/q`)
        res.send("Cookie User not found: update/q")
    }

    


})

module.exports = approuter;
