
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


//VIEW Question
approuter.get('/:id', (req, res) => {

    res.send("This is where we post a question")
	//res.render("editProfile");

});


//Question data
approuter.get('/:id/data', (req, res) => {
    let id = req.params.id
    res.send(`This is where we post a questions data so far ${id}`)
	//do we need this?

});



module.exports = approuter;
