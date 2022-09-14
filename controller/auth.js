const { registerValid } = require("../validation");
const { loginValid } = require("../validation");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//Register feature
const register = async (req, res) => {
  //validate data
  const { error } = registerValid(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if user exited
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send("Email already existed");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(req.body.password, salt);

  //create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPass,
    isStaff: req.body.isStaff,
  });
  try {
    const saveUser = await user.save();
    //res.send({user: user._id})
    res.send(saveUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Login feature
const login = async (req, res) => {
  //validate login data
  //console.log(req.body);
  const { error } = loginValid(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check of email existed
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Email has not registered");
  }

  //check if pass is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send("Password incorrect");
  }

  //Token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.status(200).send({ token, user:{
    _id:user._id,
    name: user.name,
    email: user.email,
    isStaff: user.isStaff
  } });

  //res.send('Logged In')
};

const read = async (req, res) => {
  let singleuser = await User.findById(req.params.userId)
    .select("-image.data")
    // .populate("postedBy", "_id name")
    .exec();
  console.log("SINGLE USER", singleuser);
  res.json(singleuser);
};

const updateUser = async (req, res) => {
  try {
    let fields = req.fields;

    let data = { ...fields };

    let updated = await User.findByIdAndUpdate(req.params.userId, data, {
      new: true,
    });

    return res.json(updated)
  } catch (error) {
    console.log(error);
    res.status(400).send("User Update Failed");
  }
};

const resetPass = async(req, res)=>{
  const{resetLink, newPass} = req.body;
  if(resetLink){
    jwt.verify(resetLink, function(err, decodeData){
      if(err){
        return res.status(400).json({
          error:'Incorrect Token'
        })
      }
      User.findOne({resetLink})
    })
  }else{
    return res.status(400).send("Email not existed");
    
  }
}

 module.exports = {resetPass, register, login, read, updateUser}