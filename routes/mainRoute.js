
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





/* //CAFA.WORK
//get from cafa
approuter.get("/cafa/:id", (req, res) =>{
	let sql = `SELECT * FROM content WHERE id =` + sqldbCafa.escape(req.params.id);
	let query = sqldbCafa.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result);
		res.send(result);
	})
}) */


// ---- DB MANAGEMENT ----- 

// Create a demo DB
approuter.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE node';
    sqldb.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`${result} Created node db Done...`);
        res.status(200).json({
			message: 'Database created...',
			status: "passed"
		});
    });
});

// drop db. just an action reversal
approuter.get('/dropdb', (req, res) => {
    let sql = 'DROP DATABASE IF EXISTS node;';
    sqldb.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`${result} Dropped node db Done...`);
        res.send('Database dropped...');
    });
});


//create a table
approuter.get("/createpostable", (req, res) => {
	let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), owner VARCHAR(255), PRIMARY KEY(id))';
	sqldb.query(sql, (err, result) =>{
		if(err) throw err
		console.log(`${result} Created post tb Done...`)
		res.status(200).json({
			message: 'Table posts created...',
			status: "passed"
		})
	})
})


//drop a table
approuter.get("/droptable/:name", (req, res) =>{
	let sql =`DROP TABLE IF EXISTS ${req.params.name}`;
	let query = sqldb.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result)
		res.status(200).json({
			message: "Table Dropped...",
			table: `${req.params.name} dropped`
		})
	})
})


// ---- CREATE ----- 

//load form for creating post. load create a post frontend
approuter.get("/createpost", (req, res)=>{
	if(!req.body.title){
res.render("createpost")
	}
})


//save post from form. to render post saved
approuter.post("/createpost", (req, res)=>{
 let postData = req.body
	
	if(!postData.title || postData.body || !postData.owner){
		let postData = {
		title: "Empty Book Title",
		body: "Book summary was not sent",
		owner: "Unknown",
		message: "New Book Saved"
	}}

	let sql = 'INSERT INTO posts SET ?'
	sqldb.query(sql, postData, (err, result, fields) =>{
		if(err) throw err
		console.log(`${postData.title} new post added...`)
		postData.id = result.insertId //give id of saved post back to object
		postData.message = "New Book Saved" //Custom message for frontend

		res.render("book", postData)
	})
})



// ---- READ ----- 

//Get one post by parameter getpost/9
approuter.get("/getposts/:id", (req, res) =>{
	let request = req.params.id

	if(request == "redirect"){
		res.redirect('/sql/createpost')
	}
	else{
		let sql = `SELECT * FROM posts WHERE id = ` + sqldb.escape(request)
		sqldb.query(sql, (err, result)=>{
			if (err) throw err;
			
			if(result.length == 0){
				console.log("Nothing found")
				//render 404 page
				res.render("404", {message: `No Post with ID ${request}`}) 
			}else{
	        let book = Object.assign(result[0], ["id","title","body","owner"])
			book.message = `Found a Book with same ID: ${book.id}` //Custom message for frontend
			res.render("book", book) 
			}
		
		})
	}
	
})


// Get all posts
approuter.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = sqldb.query(sql, (err, results) => {
        if(err) throw err;
		
		let allpost = Object.assign(results[0], ["id","title","body","owner"])
		//console.log(results)
        res.render("allpost", { results: results });
    });
});


//Get post from url query
approuter.get("/fetchpost", (req, res)=>{

let requestId = req.query.id
let sql = `SELECT * FROM posts WHERE id = ` + sqldb.escape(requestId)
sqldb.query(sql, (err, result)=>{
	if (err) throw err;
	console.log(result)

	const fetchedPost = Object.assign(result[0], ['id','title','body','owner']);

	res.status(200).json({
		id: fetchedPost.id,
		title: fetchedPost.title
	})
})
})


//render post by ID 
approuter.get("/renderpost/:id", (req, res) =>{
	let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
	let query = sqldb.query(sql, (err, result)=>{
		if (err) throw err;
		console.log(result);

   if(!result[0]){
	console.log("No data found for the id"); 
	res.render("post", {
		id:  "not found",
		title:  "-",
		body:  "-",
		owner: "-"
	}) 
   }else{
	const gotpost = Object.assign(result[0], ['id','title','body','owner']);
	res.render("post", gotpost) 
   }
		
		
	})
})



// ---- UPDATE ----- 

//update a post from params id
approuter.get("/updatepost/:id", (req, res) =>{
	let newTitle = "New Title Update";

	let sql =`UPDATE posts SET title = ${newTitle} WHERE id = ${req.params.id}`;
	let query = sqldb.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result)
		res.status(200).json({
			message: "Post updated",
			postid: req.params.id
		})
	})
})



//show update form	
approuter.get("/update/:id", (req, res)=>{
	let sql = `SELECT * FROM posts WHERE id =` + sqldb.escape(req.params.id);
	sqldb.query(sql, (err, result)=>{
		if(err) throw err;
		let bookToUpdate = Object.assign(result[0], ["id","title","body","owner"]);
	    res.render("update", bookToUpdate); 
	})

})



//get updates to books
approuter.post("/updated", (req, res)=>{
	let updateData = req.body; 

//let sql = `UPDATE posts SET title = ${updateData.title}, body = ${updateData.body}, owner = ${updateData.owner} WHERE id = ${updateData.id}`;
let sql = sqldb.format('UPDATE posts SET title = ?, body = ?, owner = ? WHERE id = ?', [updateData.title, updateData.body, updateData.owner, updateData.id]);

sqldb.query(sql, (err, result)=>{
	if(err) throw err;

	if(!updateData.title){
   //data not sent

	}
	else{
		res.render("updated", updateData)
	}
	console.log(updateData.title) 
})
})



// ---- DELETE ----- 

//delete a post
approuter.get("/deletepost/:id", (req, res) =>{
	let sql = `DELETE FROM posts WHERE id > ${req.params.id}`;
	let query = sqldb.query(sql, (err, result)=>{
		if (err) throw err;
		console.log(result);
		res.status(200).json({
			message: "Post deleted",
			id: `ID: ${req.params.id}`
		})
	})
})


//used by a middleware
approuter.get("/mid", (req, res, next)=>{
	res.status(200).json({
		message: "Middleware loaded"
	})
	console.log("Middleware registration must be above this string...")
})





//close connection
//sqldb.end()


module.exports = approuter;
