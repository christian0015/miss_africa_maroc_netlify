// pages/index.js
"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import "./page.module.css";
// Importer les images des candidates
import imageCandidate1 from '../../public/assets/ImgCandidates/Img-Candidate (11).jpg';
import imageCandidate2 from '../../public/assets/ImgCandidates/Img-Candidate (1).jpg';
import imageCandidate3 from '../../public/assets/ImgCandidates/Img-Candidate (4).jpg';
import imageCandidate4 from '../../public/assets/ImgCandidates/Img-Candidate (7).jpg';
import imageCandidate5 from '../../public/assets/ImgCandidates/Img-Candidate (2).jpg';
import imageCandidate6 from '../../public/assets/ImgCandidates/Img-Candidate (12).jpg';
import imageCandidate7 from '../../public/assets/ImgCandidates/Img-Candidate (10).jpg';
import imageCandidate8 from '../../public/assets/ImgCandidates/Img-Candidate (5).jpg';
import imageCandidate9 from '../../public/assets/ImgCandidates/Img-Candidate (8).jpg';
import imageCandidate10 from '../../public/assets/ImgCandidates/Img-Candidate (9).jpg';
import imageCandidate11 from '../../public/assets/ImgCandidates/Img-Candidate (3).jpg';

const imageMap = {
  1: imageCandidate1,
  2: imageCandidate2,
  3: imageCandidate3,
  4: imageCandidate4,
  5: imageCandidate5,
  6: imageCandidate6,
  7: imageCandidate7,
  8: imageCandidate8,
  9: imageCandidate9,
  10: imageCandidate10,
  11: imageCandidate11,
};

const fetchUsers = async () => {
  const response = await fetch('./api/users');
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
};

const createPayment = async (data) => {
  const response = await fetch('./api/payments/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Échec de la création du paiement');
  return response.json();
};

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to load users:', error);
      }
    };

    loadUsers();
  }, []);

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await getUsers();
//       setUsers(response.data);
//     };

//     fetchUsers();
//   }, []);

  const handleVote = async (userId, amount) => {
    try {
      const response = await createPayment({ amount, userId });
      const { approval_url } = response.data;
      
      // Redirection vers PayPal pour le paiement
      window.location.href = approval_url;
    } catch (error) {
      console.error('Error creating PayPal payment:', error);
    }
  };



  // *****************************************************************
  // Fonction pour afficher les boutons de vote associés à un utilisateur
  const showVoteButtons = (event, userId) => {
    event.stopPropagation(); // Arrêter la propagation pour éviter que le clic ne se propage à l'extérieur
    const voteButtons = document.querySelectorAll(`#user-${userId} .voteButtons`);
    voteButtons.forEach(buttons => {
      buttons.classList.add('show');
    });
  };

  // Fonction pour masquer tous les voteButtons
  const hideAllVoteButtons = () => {
    const allVoteButtons = document.querySelectorAll('.voteButtons');
    allVoteButtons.forEach(buttons => {
      buttons.classList.remove('show');
    });
  };

  // Écouter les clics en dehors des voteButtons pour masquer tous les voteButtons
  // document.addEventListener('click', (event) => {
  //   if (!event.target.closest('.voteButtons') && !event.target.closest('.button')) {
  //     hideAllVoteButtons();
  //   }
  // });

  // ******************************************************************************************



  return (
    <div className="App">
      <div className='App-head'>
      <header className="App-header">
        <nav>
        <a href="#home" className='logo'>Miss Africa</a>
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#candidates">Candidates</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header></div>
      <main>
        <section id="home" className="hero-section">
          <h1>M i s s__A f r i c a__M a r o c__2 0 2 4</h1>
          <p>Un événement moderne et futuriste pour célébrer la beauté et l'élégance.</p>
        </section>
        <section id="candidates" className="candidates-section">
          <center><h2>Nos Candidatess</h2></center>
          
        <div className='listCandidat'>
          {users.map(user => (
          <div className="candidates-grid" key={user.id} id={`user-${user.id}`} onClick={() => hideAllVoteButtons()}>
            {/* Exemple de carte candidate */}
            <div className="candidate-card" style={{backgroundImage:`url(${imageMap[user.id]})`}}>
              <Image src={imageMap[user.id]} className='imgCard' alt="Candidate" />
              <h3>#{user.id} <span>{user.fullName}</span></h3>
              <div>{user.city}</div>
              <div>{user.details}</div>
              <div>Points: {user.points}</div>
              <button onClick={(event) => showVoteButtons(event, user.id)} className='button'>Vote</button>
            <div className='voteButtons'>
              <button onClick={() => handleVote(user.id, 1)} className='voteButton'>Vote 1 DH</button>
              <button onClick={() => handleVote(user.id, 5)} className='voteButton'>Vote 5 DH</button>
              <button onClick={() => handleVote(user.id, 10)} className='voteButton'>Vote 10 DH</button>
            </div>
            </div>
            {/* Répétez pour d'autres candidates */}
          </div>
          ))}

          </div>
        
        </section>
        <section id="about" className="about-section">
          <h2>À propos de l'événement</h2>
          <p>Description de l'événement, de sa mission et de ses valeurs.</p>
        </section>
        <section id="contact" className="contact-section">
          <h2>Contactez-nous</h2>
          <form>
            <div className='input'><input type="text" placeholder="Nom" />
            <input type="email" placeholder="Email" /></div>
            
            <textarea placeholder="Message"></textarea> <br/> <br/>
            <button type="submit">Envoyer</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Miss AfricaMaroc. Tous droits réservés.</p>
      </footer>
    </div>
    
  );
}

export default App;
