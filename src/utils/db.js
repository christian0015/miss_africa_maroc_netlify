// // utils/db.js
// const mongoose = require('mongoose');

// let cachedDb = null;
// // const uri = "mongodb+srv://christiantukundastocklin:Stocklin15@mydata.hhgtpph.mongodb.net/?retryWrites=true&w=majority&appName=myData";

// async function connectToDatabase(uri) {
//   if (cachedDb) {
//     return cachedDb;
//   }

//   const opts = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   const db = await mongoose.connect(uri, opts);
//   cachedDb = db;
//   return db;
// }

// module.exports = connectToDatabase;
const mongoose = require('mongoose');

let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const opts = {
      // Utilisation des options recommandées pour la connexion à MongoDB
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Temps d'attente pour la sélection du serveur
      heartbeatFrequencyMS: 10000, // Fréquence des battements de cœur
      socketTimeoutMS: 45000, // Temps d'attente pour une réponse du serveur
    };

    const db = await mongoose.connect(uri, opts);
    cachedDb = db;
    return db;
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error; // Rejeter l'erreur pour la gérer à un niveau supérieur
  }
}

module.exports = connectToDatabase;
