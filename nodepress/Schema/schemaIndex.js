const mongoose = require("mongoose")

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



/* //initialise schema
const Post = mongoose.model("Post", postSchema)
module.exports = Post; */

module.exports = mongoose.model('Post', postSchema);
