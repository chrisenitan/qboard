const express = require('express')
const router = express.Router() //param body query

//custom data validation
const validator = require("../validators/validatorIndex")
const validatePost = validator.validatePost
const validationResult = validator.validationResult

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


//load the index page with template
router.get("/create", (req, res) =>{
	res.render('create', profiles)
})


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


//form post from create.mustache
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



//collect form data from profile.musta.. and parse to /profile
router.post("/addprofile", (req, res) =>{
	//create a new user from req
	const newUser = req.body
newUser['languages'] = newUser.languages.split(', ')

//add new profile to profile obj
profiles[newUser.id] = newUser

//show the profile page using this new info
res.redirect("/profile/"+newUser.id)

})



//COLLECT SANITIZE AND SAVE POST
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



//DELETE POST
router.delete("/delete/:title", (req, res) =>{
//define callbak for mongoose delete
let callback = (rawResult) => {
	if(rawResult == null){
		res.status(200).json({
		status: "Post deleted"
})}
	else{
	res.status(400).json({
	status: rawResult,
	message: "Post not deleted. might be aborted"
})}
}

//find result
const fpost = Post.find({title: req.params.title}).select("id").then(rpost =>{
	
if (rpost == ""){
	res.json({
	message: "Post not found"
	})
	callback("aborted")
}
else{
	const firstResult = rpost[0].id
	//delete firstresult
	const deleteFound = Post.findByIdAndRemove(firstResult, callback)
}

}).catch(err => console.log(err))

})



module.exports = router