
const express = require('express');
const mysql = require('mysql')

//initislaize express
const approuter = express();


// Create connection. is it possible to put this connection in index.js
const sqldbip = process.env.SQLServer 

const sqldb = mysql.createConnection({
    host     : sqldbip,
    user     : 'admin_chris',
    password : 'staging123',
    database : 'nodepress'
});

sqldb.connect((err) => {
    if(err){
        throw err
    }
      console.log("MySQL Database Connected...")
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


//insert a data
approuter.get("/addpost", (req, res) =>{
	//create a post. could also be gotten from req or if nothing was sent, use a dummy data
	var postData = req.body;

 	if(!req.body.title){
		var postData = {
		title: "Faster Higher Farther",
		body: "Book on the history of auto industry and it's corrupt stories",
		owner: "Jack Ewing"
	}}
	
	let sql = 'INSERT INTO posts SET ?';
	sqldb.query(sql, postData, (err, result) =>{
		if(err) throw err
		console.log(`${result} new post added...`)
		res.status(200).json({
			message: "New post added",
			status: "Passed"
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


//select one post
approuter.get("/getpost/:id", (req, res) =>{
	let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`
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
		res.render("post", result)
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












module.exports = approuter;