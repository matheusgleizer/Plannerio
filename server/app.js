const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

// Setting up app and PORT
const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.static(path.join(__dirname, "../public/build")));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Database connection and server initialization
mongoose
	.connect(process.env.DB_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
	.catch(err => console.log(err));

// Routes
app.use(userRoutes);
