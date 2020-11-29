
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

//Save new Question
approuter.post('/create', (req, res) => {
    var rawQuestion = req

    //collect data valuable to user
    var userQuestion = {
        question: req.question
    }

    //check for bot
    if(rawQuestion.bt != ""){
        console.log("Bot found")
    }
    else{
        //make a secure random string
        var qRef = "";
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(var i = 0; i < 7; i++){
            qRef += chars.charAt(Math.floor(Math.random(52) * chars.length))
        }
        rawQuestion.ref = qRef 
        userQuestion.ref = qRef 
        //post question
        let postQuestion = `INSERT INTO questions set ?`
        sqldb.query(postQuestion, rawQuestion, (err, result, fields)=>{
            if (err) throw err
            userQuestion.id = result.insertId
            res.render(`/question/:${userQuestion.ref}`, userQuestion)
        })
    }
	//res.render("editProfile");

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
