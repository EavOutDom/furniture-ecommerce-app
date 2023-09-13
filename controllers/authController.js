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
      res.status(201).json({ message: 'User created successfully' });
    } catch (e) {
      res.status(500).json(e);
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) { return res.status(401).json({ message: 'Wrong credentials, provide a valid email' }); }
      const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET.toString());
      const decryptedPass = decryptedPassword.toString(CryptoJS.enc.Utf8);
      if (decryptedPass !== req.body.password) { return res.status(401).json({ message: 'Wrong password' }); }
      const userToken = jwt.sign({
        id: user.id
      }, process.env.JWT_SECRET, { expiresIn: '7d' });
      const { password, __v, createdAt, updatedAt, ...userData } = user._doc;
      return res.status(200).json({ ...userData, token: userToken });
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}