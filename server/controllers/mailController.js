const nodemailer = require("nodemailer");

module.exports.sendMail = async (req, res) => {
	try {
		// Get the data from the client; a name, an email, a subject and a message.
		const {name, email, subject, message} = req.body;

		// Set the configuration for the companies email
		const transporter = nodemailer.createTransport({
			host: "smtp.office365.com",
			port: 587,
			secure: false,
			tls: {
				ciphers: "SSLv3",
			},
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		// Forward the emails with the clients information
		const info = await transporter.sendMail({
			from: `"${email}" ${process.env.EMAIL_USER}`,
			to: process.env.EMAIL_USER,
			replyTo: email,
			subject: subject,
			text: `Message send by: ${name} - ${email} \n\n ${message}`,
		});

		res.status(200).json({message: "Message sent!"});
	} catch (err) {
		console.log(err);
	}
};
