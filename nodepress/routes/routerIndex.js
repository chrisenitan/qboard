const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
//post, get, put, delete

//create a scehma
const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: "Default Title",
	},
	body: {
		type: String,
		required: "Default Title",
	},
	released: {
		type: String,
		required: "2019-10-09",
	},
	owner: {
		type: String,
		required: "Zu",
	},
	s_code: {
		type: Number,
		required: 897494,
	}
})

//initialise schema
const Post = mongoose.model("Post", postSchema)

//create data object for later
const profiles = {

	chris:{
		id: "chris",
		image: "/images/chris.jpg",
		name: "Chris",
		company: "Vrixe",
		languages: ['node', 'php', 'js']
	},

	mary:{
		id: "mary",
		image: "/images/mary.jpg",
		name: "Mary",
		company: "Vrixe",
		languages: ['node', 'php', 'mysql']
	},

	paul:{
		id: "paul",
		image: "/images/paul.jpg",
		name: "Paul",
		company: "Vrixe",
		languages: ['node', 'react', 'js']
	}
	
}


//homepage
router.get("/", (req, res, next) =>{
	const allPost = Post.find().select("id title owner").then(
		allPostObj => {
			// res.send({
			// 	allPost: allPostObj
			// })
			res.status(200).json({
				greeting: "Hello",
				status: "OK",
				allPost: allPostObj
			})				
		}
	).catch(err => console.log(err))
	
})

//response with json
router.get("/json", (req, res, next) =>{
	const data={
		greeting: "Hello"
	}
	res.json(data);
})


//render content by url parameters
router.get("/writer/:user/:age", (req, res, next) =>{
	const user = req.params.user
	const age = req.params.age

const userData = {
	user: user,
	age: age,
	text:`${user} is ${age} years old`
}
res.render("writer", userData)
})



//populate by url query parameters
router.get("/posts", (req, res) =>{
const postTitle = req.query.title
const postOwner = req.query.owner

const data = {
	Title: postTitle,
	Owner: postOwner
}
res.render('content', data)
})


//response with html template render
router.get("/index", (req, res) =>{
//render the page index
res.render('index', null)
})


//our first post
router.post("/postContent", (req, res) =>{
	
	const postArray = req.body
	const job = postArray.occupation
	const name = postArray.username
	const handle = {
		username: job,
		occupation: name
	}	

  res.render("contentView", handle)

})


//getuser from obj above by req
router.get("/profile/:username", (req, res) =>{
	const user = req.params.username
	const result = profiles[user]

if(result == null){
const result = {
message: `${user} not found`
}
res.render("profile", result)
}

res.render("profile", result);
})



//post from profile mustache form
router.post("/addprofile", (req, res) =>{
	//create a new user from req
	const newUser = req.body
newUser['languages'] = newUser.languages.split(', ')

//add new profile to profile obj
profiles[newUser.id] = newUser


//show the profile page using this new info
res.redirect("/profile/"+newUser.id)

})


module.exports = router