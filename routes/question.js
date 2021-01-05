
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
        res.render("new")
    }
    else{
        res.redirect("/")
    }


})


//Save new Question
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
        //create question object
         var question = {
            questions: req.body.q,
            datePosted: `${nDate.getMonth()}-${nDate.getDate()}-${nDate.getFullYear()}`,
            lastEdit: `${nDate.getMonth()}-${nDate.getDate()}-${nDate.getFullYear()}`,
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
            //res.send(`you asked: ${req.body.q} and you ref is ${qRef}`)
            console.log(question)
        
        
            //post question
            let postQuestion = `INSERT INTO questions set ?`
            sqldb.query(postQuestion, question, (err, result, fields)=>{
                if (err) throw err
                question.id = result.insertId
                console.log(`you asked: ${req.body.q} and you ref is ${qRef} and your question ID is ${question.id}`)
            // res.render(`/question/:${question.ref}`, question)
            res.render("question", question) //this should be redirect and let /:id do the heavy liftin instead
            })
            
         }) 
    }
    //res.render("editProfile");
    //id	questions	datePosted	lastEdit	refID	ownerID	ownerUsername

});

//VIEW Question
approuter.get('/:id', (req, res) => {

    res.send("This is where we post a question")
    //get username via ID
	//res.render("editProfile");
 
});


//Question data in more details
approuter.get('/data/:id', (req, res) => {
    let id = req.params.id
    res.send(`This is where we post a questions data so far ${id}`)
	//do we need this?

});

//edit your question.. how do we keep intergity here?
approuter.get("/edit/:id", (req, res)=>{

})

module.exports = approuter;
