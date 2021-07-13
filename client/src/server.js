const express = require("express");
const router = express.router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, console.log("Running on port 5000"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "menolan22@gmail.com",
    pass: "SirrPurr1!",
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
      res.json({ status: "Sent" });
    }
  });
});