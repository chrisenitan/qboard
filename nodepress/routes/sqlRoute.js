
const express = require('express');
const mysql = require('mysql')

//initislaize express
const approuter = express();


/* 
const sqldb = mysql.createConnection({
    host     : process.env.SQLServer,
    user     : 'admin_chris',
    password : 'process.env.GCPsqlPassword',
    database : 'nodepress'
});
*/

const sqldb = mysql.createConnection({
    host     : process.env.freeHostingServer,
    user     : 'sql2333143',
    password : process.env.fHSPassword,
	database : 'sql2333143'
});

sqldb.connect((err) => {
    if(err){ throw err }
      console.log("MySQL Database Connected..." + sqldb.threadId)
})
 
 
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

//load form for creating post. load create a post frontend
approuter.get("/createpost", (req, res)=>{
	if(!req.body.title){
res.render("createpost")
	}
})

//save post from form
approuter.post("/createpost", (req, res)=>{
 let postData = req.body
	
	if(!postData.title || postData.body || !postData.owner){
		let postData = {
		title: "Empty Book Title",
		body: "Book summary was not sent",
		owner: "Unknown"
	}}

	let sql = 'INSERT INTO posts SET ?';
	sqldb.query(sql, postData, (err, result) =>{
		if(err) throw err
		console.log(`${result} new post added...`)
		res.status(200).json({
			status: "Saved",
			message: `New post added from: ${postData.owner}`,
			title: postData.title,
			body: postData.body
		})
	})
})
	

// Select all posts
approuter.get('/getallposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = sqldb.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});


//select one post. safely
approuter.get("/getpost/:id", (req, res) =>{
	let sql = `SELECT * FROM posts WHERE id = ` + sqldb.escape(req.params.id)
	let query = sqldb.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result);
		res.send(result);
	})
})


//render post by ID 
approuter.get("/renderpost/:id", (req, res) =>{
	let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
	let query = sqldb.query(sql, (err, result)=>{
		if (err) throw err;
		console.log(result); //id title body owner

		const gotpost = Object.assign(result[0], ['id','title','body','owner']);

		res.render("post", gotpost)
	})
})



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


//delete a post
approuter.get("/deletepost/:id", (req, res) =>{
	let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
	let query = sqldb.query(sql, (err, result)=>{
		if (err) throw err;
		console.log(result);
		res.status(200).json({
			message: "Post deleted",
			id: `ID: ${req.params.id}`
		})
	})
})


//close connection
//sqldb.end()








module.exports = approuter;