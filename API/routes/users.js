const router = require("express").Router();
const nodemailer = require("nodemailer");
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:name", async (req, res) => {
  try {
    const user = await User.find({ username: req.params.name });
    user.length != 0
      ? res.status(200).json(user)
      : res.status(400).json("No such user found");
  } catch (err) {
    res.status(500).json(err);
  }
});

///Update API has to be done

router.delete("/:name", async (req, res) => {
  try {
    await User.deleteOne({ username: req.params.name });
    res.status(200).json("User has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});



///mail API

router.post("/mail", async(req, res) => {
  "use strict";
  const nodemailer = require("nodemailer");

  async function main() {
   
    let transporter = nodemailer.createTransport({
      host: "192.168.1.14",
      port: 25,
      secure: false, // true for 465, false for other ports
      tls: {
        
        rejectUnauthorized: false
    },
    });

    const user = req.body.emailTo;
    const receiver = [user.email]

    
    let info = await transporter.sendMail({
      from: '"Online Leave App" <leave@meridianfinancebd.com>',
      to: receiver, // list of receivers
      subject: "Leave Application", // Subject line
      text: "Leave App Requires your attention", // plain text body
      //html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json(info);
  }

  main().catch((err) => {
    console.log(err)
    res.status(500).json(err);
  });
});

module.exports = router;
