const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();

let transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false,
  auth: {
    user: "apikey",
    pass: "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",
  },
});

exports.sendEmail = functions.https.onRequest((request, response) => {
  const email_from = request.query.email_from;
  const message = request.query.message;

  const mailOptions = {
    from: "loughie5@hotmail.com",
    to: "loughie5@hotmail.com",
    subject: "THIS IS A TEST",
    html: `${message} <br><br> From ${email_from}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(
        `ERROR: (email) ${email_from} --- (message) ${message} --- (error) ${error.toString()}`
      );
      response.send(error.toString());
    }
    response.send("You message was submitted successfully!");
  });
});
