const mongoose = require("mongoose");
const {isEmail} = require("validator"); // Validator what we will use for the email
const bcrypt = require("bcrypt"); // Encrypt the password with this package

// Create a use Schema, which will be used to create users and interact with them
const userSchema = new mongoose.Schema({
	// Define each field we will require, with its type and required status.
	// In this case, everything will be a string and required.
	first_name: {
		type: String,

		// We set it to required with a custom message if the user does not provide the information
		required: [true, "Please enter your name"],
	},
	last_name: {
		type: String,
		required: [true, "Please enter your last name"],
	},
	email: {
		type: String,
		required: [true, "Please enter your email"],
		unique: true,

		// This will convert the email to lowercase, just in case the user has CAPSLOCK on
		lowrcase: true,

		// We will use the validation package to check if this is an actual email
		// this way we will save the time from writing RegEx
		validate: [isEmail, "Please enter a valid email"],
	},
	password: {
		type: String,
		required: [true, "Please anter a password"],

		// Set the minimum length of the password, we can set this higher or lower if desired
		minlength: [6, "Password has to be at least 6 charachters long"],
	},
});

// Encrypt the password before it saves to the database.
userSchema.pre("save", async function (next) {
	// Salt is the strength of the encryption, default is 10, which is enough for this purpose
	const salt = await bcrypt.genSalt();

	// this will encrypt the password before it is sent to the database.
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

// Custom method to log in the user.
userSchema.statics.login = async function (email, password) {
	// Try to find the email given by the user in the databse
	const user = await this.findOne({email});

	if (user) {
		// This will compare the password provided by the user with the encrypted
		// password that is stored in the database
		const auth = await bcrypt.compare(password, user.password);

		if (auth) {
			// "If the passwords match"
			return user; // Just return the user
		}
		throw Error("Incorrect Password");
	}

	throw Error("Incorrect Email");
};

const User = mongoose.model("users", userSchema);

module.exports = User;
