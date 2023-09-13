const User = require('../models/User');

module.exports = {
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) { return res.status(401).json({ message: 'User do not exist' }) }
      const { password, __v, createdAt, updatedAt, ...userData } = user._doc;
      return res.status(200).json(userData);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: 'User successfully deleted' })
    } catch (e) {
      return res.status(500).json(e);
    }
  }
}