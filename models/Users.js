const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	contact: Number,
	project: String,
});

const UserModel = new mongoose.model("users", UserSchema);

module.exports = UserModel;
