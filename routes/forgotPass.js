const { application } = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const mailer = require("../mail");
const User = require("../model/User");
const verifyToken = require("./verifyToken");
const formidable = require("express-formidable");
const { updateUser, resetPass } = require("../controller/auth");

router.post("/forgot-password", async (req, res) => {
  
  const emailExist = await User.find({ email: req.body.email });
  if (!emailExist) {
    return res.status(400).send("Email not existed");
  }

  //user exists and create the one time link availabe for 15mins
  const JWT_THING = "for file dotenv";
  const secure = JWT_THING;
  const payload = {
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    _id: req.body._id
  };
  // console.log(req.body.email);
  const token = jwt.sign(payload, secure, { expiresIn: "15m" });
  mailer.sendMail(
    req.body.email,
    "Reset password",
    // `<a href="${process.env.APP_URL}/reset-password/"> Reset Password </a>`
    `<a href="${process.env.APP_URL}/reset-password/${token}"> Reset Password </a>`
  );
  // const link = `${process.env.APP_URL}/reset-password/${token}`;
  // console.log(link);
  res.send("link has been sent to your email");
  
});

// route.get("/reset-password/:token", (req, res, next) => {
//   const { token } = req.params;

//   //check if the id is valid
// //   if (id !== req.body.name)
// //     res.send("the name is invalid");
// //     return;
// //   }

//   //valid id and user
//   const JWT_THING = "for file dotenv";
//   const secure = JWT_THING + req.body.password;
//   try {
//     // const payload = jwt.verify(token, secure);
//     // res.render("reset-password", { email: req.body.email });
//     res.send("Reset Link");
//   } catch (error) {
//     console.log("error.message");
//     res.send("error.message");
//   }
// });

// route.post("/reset-password/:token", async (req, res, next) => {
//   const {  token } = req.params;
// //   const { password } = req.body.password;
//   //check if the id is valid
// //   if (id !== req.body._id) {
// //     res.send("the name is invalid");
// //     return;
// //   }

//   const JWT_THING = "for file dotenv";
//   const secure = JWT_THING + req.body.password;

//   try {
//     // const payload = jwt.verifyToken(token, secure);
//     //validate pass and pass2 should match
//     //we can find user id and email with the payload
//     //for hashing process if have
//     let updated = await User.findByIdAndUpdate(req.params.userId, {
//         new: true,
//       });
//     //   res.json(updated)
//       res.json('Password Updated')
//     } catch (error) {
//       console.log(error);
//       res.status(400).send("Password Update Failed");
//     }
//   }
// );

router.put("/reset-password/:token", formidable(), resetPass);

module.exports = router;
