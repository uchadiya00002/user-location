const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { registerValidation, loginValidation } = require("./validation");

router.post("/register", async (req, res) => {
  //lets validate the response before we make a user
  const { error } = registerValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  //checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(404).send("Email already exists enter a new email.");

  //Hash Passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new user
  const user = new User({
    name: req.body.name,
    position: req.body.position,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user_id: user._id });
  } catch (error) {
    res.status(404).send(error);
  }
});

//Login
router.post("/login", async (req, res) => {
  //lets validate the response before we login user
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if the email exist for login
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(404).send("Email doesn't exist pleast register first");

  //password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(404).send("Invalid password");

  //create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
  // res.send("Logged in success");
});

module.exports = router;
