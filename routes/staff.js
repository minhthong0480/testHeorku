const router = require("express").Router();
const formidable = require('express-formidable')

//controller
const { create, pets, image } = require("../controller/pet");

router.post("/create-pet",formidable(), create);
router.get('/pets', pets)
router.get('/pet/image/:petId', image);

module.exports = router;
