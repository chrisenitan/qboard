
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
    let newQuestion = req

    //check for bot
    if(newQuestion.bt != ""){
        console.log("Bot found")
    }
    else{
        //post question
        let postQuestion = `INSERT into posts set ?`
        sqldb.query(postQuestion, newQuestion, (err, result, fields)=>{
            
        })
    }
	//res.render("editProfile");

});

//VIEW Question
approuter.get('/:id', (req, res) => {

    res.send("This is where we post a question")
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
