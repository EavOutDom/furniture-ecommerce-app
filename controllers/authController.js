const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

module.exports = {
  createUser: async (req, res) => {
    const newUser = new User({
      ...req.body,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET.toString())
    });
    try {
      await newUser.save();
      res.status(201).json('User created successfully');
    } catch (e) {
      res.status(500).json({ error: true, message: e });
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(401).json('Wrong credentials, provide a valid email');
      const decryptedPassword = CryptoJS.AES.decrypt(req.body.password, process.env.SECRET);
      const decryptedPass = decryptedPassword.toString(CryptoJS.enc.Utf8);
      !decryptedPass && res.status(401).json('Wrong password');
      const userToken = jwt.sign({
        id: user.id
      }, process.env.JWT_SECRET, { expiresIn: '7d' });

      const { password, _v, createdAt, updatedAt, ...userData } = user._doc;
      res.status(200).json({ ...userData, token: userToken });
    } catch (e) {
      res.status(500).json({ error: true, message: e });
    }
  }
}