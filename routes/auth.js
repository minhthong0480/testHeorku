const router = require("express").Router();
const formidable = require("express-formidable");
const verifiedToken = require("./verifyToken");
const {register, login, read, updateUser} = require ("../controller/auth")



router.post('/register', register)
router.post('/login', login)
router.get("/user/:userId", read);
router.put("/user/update-user/:userId", verifiedToken, formidable(), updateUser);
router.put("/reset-password", formidable(), updateUser);


  module.exports = router