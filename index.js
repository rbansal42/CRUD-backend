const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

// Creating connection
mongoose.connect(
	"mongodb+srv://rahul:rahul123@cluster0.o67h9xy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", (req, res) => {
	UserModel.find({})
		.then((clients) => res.json(clients))
		.catch((err) => res.json(err));
});

app.get("/getClient/:id", (req, res) => {
	const id = req.params.id;

	UserModel.findById({ _id: id })
		.then((users) => res.json(users))
		.catch((err) => {
			console.log(err);
		});
});

app.get("/updateClient/:id", (req, res) => {
	const id = req.params.id;

	UserModel.findByIdAndUpdate(
		{ id },
		{
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			contact: req.body.contact,
			project: req.body.project,
		}
	)
		.then((users) => res.json(users))
		.catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
	UserModel.create(req.body)
		.then((users) => res.json(users))
		.catch((err) => res.json(err));
});

app.listen(3001, () => {
	return console.log("Server is running");
});
