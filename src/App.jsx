import './App.css'
import Profile from './components/Profile/Profile';
import ModifProfil from './components/ModifProfil/ModifProfil';
import viteLogo from '/vite.svg'
import React, { useState, useEffect } from 'react';

function App() {

  function onClickHandler(profil) {
    console.log("Je viens de profil", profil);
    return "cacher";
  }

  function onClickHandlerModif(modif) {
    console.log("Je viens de modif", modif);
    return "cacher";
  }

  const [profileData, setProfileData] = useState({
    nom: 'Chazot',
    prenom: 'Julien',
    adresse: '112 Rue du Tilleul',
    telephone: '0771707755',
  });
  
  useEffect(() => {
    console.log('Changements dans le formulaire:', profileData);
  }, [profileData]);

  const submitHandler = event => {
    event.preventDefault();
    console.log('Envoyer profileData pour mise à jour du profil:', profileData);
  };

  return (
    <>
    <div className="header">
      <div className="titre">TP de Julien CHAZOT</div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
    </div>
    <form method="get" onSubmit={submitHandler}> 
    <div className="main">
      <h1>Mon Profil Vite + React</h1>
      <div className="mesinfos">
        <h2>Mon profil</h2>
        <Profile profileData={profileData} childClickHandler={onClickHandler} />
      </div>
      <div className="majinfos">
        <h2>Modifier le profil</h2>
        <ModifProfil profileData={profileData} setProfileData={setProfileData} childClickHandler={onClickHandlerModif} />
      </div>
    </div>
    </form>
    <div className="footer">
      <div className="developed">Developped by Julien Chazot</div>
    </div>
    </>
  );
}

export default App;
