//getting express
const express = require("express")
//needed so we can route via expres api
const router = express.Router();

//validation module
const {check, validationResult} = require('express-validator');

//to set a schema to use
const mongoose = require("mongoose");

//create a post schema
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
}); 

//initialize schema
const Post = mongoose.model("Post", postSchema);


//validate post
const createPostValidator = [
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





//get all post
router.get("/", (req, res) =>{
	//get some
const fpost = Post.find().select("id title owner")
	.then(rpost =>{
		res.status(200).json({
			//turn what you get as fpost into json value rpost
			fpost: rpost
		})
	}).catch(err => console.log(err))
	
})



//collect, schema, sanitize and save new post
router.post("/post", createPostValidator, (req, res)=>{

const errors = validationResult(req);

if(!errors.isEmpty()){
	const firstError = errors.errors[0].msg
	return res.status(400).json({
	firstError
	});
}

else{
//make a post const
	const post = new Post(req.body);
	post.save().then(result =>{
	res.status(200).json({
		post: result
		})
	})
}
//this can be written raw thanks to the bodyparser module in app.js
console.log(`Creating:`, req.body);
});




//DELETE
router.delete("/delete/:title", (req, res)=>{

//define callbak for mongoose delete
let callback = (rawResult) => {
	if(rawResult == null){
		res.status(200).json({
		status: "Post deleted"
})}
	else{
	res.status(400).json({
	status: rawResult,
	message: "Post not deleted"
})}
}

//find result
const fpost = Post.find({title: req.params.title}).select("id").then(rpost =>{
	
if (rpost == ""){
	res.json({
	message: "Post not found"
	})
}
else{
	const firstResult = rpost[0].id
	//delete firstresult
	const deleteFound = Post.findByIdAndRemove(firstResult, callback)
}

}).catch(err => console.log(err))

})



//exporting router as needed, tough we will be calling the whole file
module.exports = router;
