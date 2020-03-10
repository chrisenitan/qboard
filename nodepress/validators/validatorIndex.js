//validation module
const {check, validationResult} = require('express-validator');


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


module.exports = {
    check: check,
    validationResult: validationResult,
    validatePost: validatePost
}