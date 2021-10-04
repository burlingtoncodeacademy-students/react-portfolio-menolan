//Initializing express
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

//setting up a default port
const port = process.env.PORT || 5000
//binding our server to a static directory
app.use(express.static("./client/build"))
//setting up a route handler
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html")
})

app.use(cors());
app.use(express.json());
app.use("/", router);

//open a connection to listen for and respond to requests
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "menolan22@gmail.com",
    pass: "igfzsqzwbstnwadk",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

router.post("/Contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "menolan22@gmail.com",
    subject: "Portfolio Site",
    html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "Error" });
    } else {
      res.json({ status: "Message sent! I'll get back to you shortly" });
    }
  });
});