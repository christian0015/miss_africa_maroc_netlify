// pages/api/users.js
const connectToDatabase = require('../../utils/db');
const User = require('../../models/User');

const handler = async (req, res) => {
  await connectToDatabase(process.env.MONGODB_URI);

  if (req.method === 'GET') {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error });
    }
  } else if (req.method === 'POST') {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

// module.exports = handler;
export default handler;


