const express = require('express')
const router = express.Router()

//validation module
const {check, validationResult} = require('express-validator');

//get our custom schema
const Post = require("../Schema/schemaIndex")

//create data object for later
const profiles = {

	chris:{
		id: "chris",
		image: "/images/chris.jpg",
		name: "chris",
		company: "Vrixe",
		languages: ['node', 'php', 'js']
	},

	mary:{
		id: "mary",
		image: "/images/mary.jpg",
		name: "mary",
		company: "Vrixe",
		languages: ['node', 'php', 'mysql']
	},

	paul:{
		id: "paul",
		image: "/images/paul.jpg",
		name: "paul",
		company: "Vrixe",
		languages: ['node', 'react', 'js']
	}
	
}


//sanitize posts
const validatePost = [

	//title
check('title').not().isEmpty().withMessage("Please write a title"),
check('title', "Title must be minimum 10 characters").isLength({
	min: 7,
	max: 150
}),

//body
check("body", "Write a body").not().isEmpty(),
check("body", "Body should be minimum of 10 characters").isLength({
	min: 10,
	max: 2000
}),

//released
check("released", "Write a release date").not().isEmpty(),
check ("released", "Value must be date").isLength({
	min: 8,
	max: 10
}),

//owner
check("owner", "Write a post owner").not().isEmpty(),
check ("owner", "Name must be minimum of 10 characters").isLength({
	min: 5,
	max: 150
}),

//s_code 
check("s_code", "Reference is missing").not().isEmpty(),
check ("s_code", "Value must be minimum of 8 characters").isLength({
	min: 5,
	max: 10
})

]


//homepage get all posts
router.get("/", (req, res, next) =>{
	const allPost = Post.find().select("id title owner body released s_code").then(
		allPostObj => {
			// res.send({
			// 	allPost: allPostObj
			// })
			res.status(200).json({
				status: true,
				allPost: allPostObj
			})				
		}
	).catch(err => json({
		status: false
	}))
	
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



//populate by url ? query parameters
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
res.render('index', null)
})


//form post
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



//collect sanitze and save new post
router.post("/savepost", validatePost, (req, res)=>{
	const errors = validationResult(req)
	const rawpost = new Post(req.body)

	if(!errors.isEmpty()){
		const firstError = errors.errors[0].msg
		return res.status(400).json({
			firstError
		})
	}

	//save post
	else{
		const post = new Post(req.body)
		post.save().then(result =>{
			res.status(200).json({
				post: result,
				status: "Ok"
			})
		})
	}
	console.log(`Created: ${rawpost}`)

})






module.exports = router