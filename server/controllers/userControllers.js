const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Custom error handling which will be used on the front end
const handleErrors = err => {
	const errors = {
		first_name: "",
		last_name: "",
		email: "",
		password: "",
	};

	// Checking each error and adding the message to the "errors" object.
	err.code === 11000 && (errors.email = "That email is already registered");
	err.message === "Incorrect Email" && (errors.email = "Email is not registered");
	err.message === "Incorrect Password" && (errors.password = "Incorrect password");

	// This will take the errors displayed while creating an account and set the values to the object.
	if (err.message.includes("users validation failed")) {
		Object.values(err.errors).forEach(({properties}) => {
			errors[properties.path] = properties.message;
		});
	}

	// Returning the modified object to be used
	return errors;
};

// The max age of the cookies created by JWT, this will be three days.
const maxAge = 3 * 24 * 60 * 60;

// the "id" will be the user's ID in the database, for unique identification
const createToken = id => {
	return jwt.sign({id}, process.env.JWT_TOKEN, {
		expiresIn: maxAge,
	});
};

// The logic behind the signing up process
// It will require a full name, a last name, an email and obviously a password.
module.exports.signup = async (req, res) => {
	// Destructuring the body data we will get
	const {first_name, last_name, email, password} = req.body;

	try {
		// Using the model we defined to create a user, with the data received form the client
		const user = await User.create({first_name, last_name, email, password});

		// If it was created succesfully, take that user's ID and create a token with it
		const token = createToken(user._id);

		// Create a cookie with the name of "plannerio", insert the token created above
		// and make it only be appliable through http, and set up a max age of three days.
		// maxAge * 1000 => We have to convert the days in milliseconds
		res.cookie("plannerio", token, {httpOnly: true, maxAge: maxAge * 1000});
		res.status(201).json({user: user._id});
	} catch (err) {
		// Assign the error handling function to a variable to be used as a response from the server
		const errors = handleErrors(err);

		// This will call the function and send the error message so we can use it on the frontend
		res.status(400).json({errors});
	}
};

// The logic behind the login process, we will only need the email and the password
module.exports.login = async (req, res) => {
	// Destructuring the email and password for the login process
	const {email, password} = req.body;

	try {
		// Try to log in, which will then compare the password with the encrypted password
		// that we stored in the database
		const user = await User.login(email, password);

		// If the login was successful, create a token with the user's ID.
		const token = createToken(user._id);

		// Again, create a cookie with the name of plannerio and with a max age of three days.
		res.cookie("plannerio", token, {httpOnly: true, maxAge: maxAge * 1000});
		res.status(201).json({user: user._id});
	} catch (err) {
		// Same as before, error handling which can be used on the front end.
		const errors = handleErrors(err);
		res.status(400).json({errors});
	}
};

// The very simple logout process, no information required
module.exports.logout = (req, res) => {
	// Set the cookie to plannerio but without any token, and a max age of 1 millisecond
	res.cookie("plannerio", "", {maxAge: 1});
	res.status(200).json({message: "Loged out successfuly"});

	// Redirect the user to the index page
	res.redirect("/");
};
