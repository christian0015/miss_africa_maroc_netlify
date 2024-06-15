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

export default handler;

// module.exports = handler;



// import connectToDatabase from '../../utils/db';
// import User from '../../models/User';

// const handler = async (req, res) => {
//   try {
//     // Assurez-vous que la connexion à la base de données est établie
//     await connectToDatabase(process.env.MONGODB_URI);

//     if (req.method === 'GET') {
//       let users;
//       const startTime = Date.now();

//       // Récupérer tous les utilisateurs avec une projection minimale
//       users = await User.find().select('id urlPhoto fullName');

//       // Vérifier combien de temps cela a pris
//       const elapsedTime = Date.now() - startTime;

//       // Si cela prend plus de 500 ms, récupérer avec plus de champs
//       if (elapsedTime < 500) {
//         users = await User.find().select('id urlPhoto fullName city points');
//       }

//       res.status(200).json(users);
//     } else if (req.method === 'POST') {
//       // Créer un nouvel utilisateur
//       const user = new User(req.body);
//       await user.save();
//       res.status(201).json(user);
//     } else {
//       // Méthode non autorisée
//       res.status(405).json({ message: 'Method Not Allowed' });
//     }
//   } catch (error) {
//     // Capturer et gérer les erreurs de manière appropriée
//     console.error('Error handling request:', error);
//     res.status(500).json({ message: 'Internal Server Error', error });
//   }
// };

// export default handler;




// import connectToDatabase from '../../utils/db';
// import User from '../../models/User';

// const handler = async (req, res) => {
//   try {
//     // Assurez-vous que la connexion à la base de données est établie
//     await connectToDatabase(process.env.MONGODB_URI);

//     if (req.method === 'GET') {
//       let users;
//       const startTime = Date.now();

//       // Récupérer tous les utilisateurs avec une projection complète
//       users = await User.find().select('id urlPhoto fullName city points');

//       // Vérifier combien de temps cela a pris
//       const elapsedTime = Date.now() - startTime;

//       // Si cela prend plus de 500 ms, récupérer avec une projection minimale
//       if (elapsedTime > 500) {
//         users = await User.find().select('id urlPhoto fullName');
//       }

//       res.status(200).json(users);
//     } else if (req.method === 'POST') {
//       // Créer un nouvel utilisateur
//       const user = new User(req.body);
//       await user.save();
//       res.status(201).json(user);
//     } else {
//       // Méthode non autorisée
//       res.status(405).json({ message: 'Method Not Allowed' });
//     }
//   } catch (error) {
//     // Capturer et gérer les erreurs de manière appropriée
//     console.error('Error handling request:', error);
//     res.status(500).json({ message: 'Internal Server Error', error });
//   }
// };

// export default handler;
