
const express = require('express'); //param body query
const mysql = require('mysql')

//initislaize express
const approuter = express();


/* GCP
const sqldb = mysql.createConnection({
    host     : process.env.SQLServer,
    user     : 'admin_chris',
    password : 'process.env.GCPsqlPassword',
    database : 'nodepress'
});
*/

/*
add ssh access to shared hosting for namecheap
ssh -f cafaqadu@server161.web-hosting.com -p21098 -L 3306:127.0.0.1:3306 -N
Pass: MuYR@xjBc5Wam88
check all ssh conns: ps aux | grep sshd
Close tunnel: kill -9 <pid>
*/
/*   const sqldbCafa = mysql.createConnection({
    host     : process.env.cafahost,
    user     : process.env.cafauser,
    password : process.env.cafapass,
	database : process.env.cafadb
});

 sqldbCafa.connect((err) => {
    if(err){ throw err }
      console.log("MySQL Cafa Database Connected..." + sqldbCafa.threadId)
}) 
 */

const sqldb = mysql.createConnection({
    host     : process.env.fhserver,
    user     : process.env.fhuser,
    password : process.env.fhpass,
	database : process.env.fhdb
});

sqldb.connect((err) => {
    if(err){ throw err }
      console.log("MySQL FreeHost Database Connected..." + sqldb.threadId)
})


//SIGN UP
approuter.get('/signup', (req, res) => {

	res.render("signup");

});


//LOG IN
approuter.get('/signup', (req, res) => {

	res.render("signup");

});








//close connection
//sqldb.end()


module.exports = approuter;
