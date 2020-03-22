
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
        console.log(result);
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
        console.log(result);
        res.send('Database dropped...');
    });
});




module.exports = approuter;