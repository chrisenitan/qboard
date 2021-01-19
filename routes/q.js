
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
            res.render("question/index", question)
        })
        }
        //searched for question but none found
        else{
            let noData = {
                message: "Question not found"
            }
            res.render("question/index", noData)
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

//edit your question.. how do we keep intergity here?
approuter.get("/edit/:id", (req, res)=>{

    //js array push for new comments? do we want to support this
})

module.exports = approuter;