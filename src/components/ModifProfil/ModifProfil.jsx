import React, { useState } from 'react';
import styles from './ModifProfil.module.css';

function ModifProfil({ childClickHandler, setProfileData, profileData }) {
  const [visible, setVisible] = useState(false);
  const [newData, setNewData] = useState(profileData);

  const submitModif = event => {
    event.preventDefault();
    console.log('Envoyer setProfileData pour mise à jour du profil:', setProfileData);
  };

  const handleInputChange = (e, fieldName) => {
    setNewData(prevData => ({
      ...prevData,
      [fieldName]: e.target.value
    }));
  };

  const handleModifierClick = () => {
    //childClickHandler(setProfileData);
    setProfileData(newData)
  };

  return (
    <>
    
      <button
        onClick={() => {
          setVisible(!visible);
          childClickHandler("test");
        }}
      >
        Modifier le profil
      </button>

      {visible && (
        <div className={styles.modifprofil}>
        <form method="get" onSubmit={submitModif}>
          <input
            type="text"
            placeholder="Nouveau nom"
            value={newData.nom}
            onChange={(e) => handleInputChange(e, "nom")}
          />
          <input
            type="text"
            placeholder="Nouveau prénom"
            value={newData.prenom}
            onChange={(e) => handleInputChange(e, "prenom")}
          />
          <input
            type="text"
            placeholder="Nouvelle adresse"
            value={newData.adresse}
            onChange={(e) => handleInputChange(e, "adresse")}
          />
          <input
            type="text"
            placeholder="Nouveau numéro de téléphone"
            value={newData.telephone}
            onChange={(e) => handleInputChange(e, "telephone")}
          />
          <button onClick={handleModifierClick}>Modifier</button>
          </form>
        </div> 
      )}
    </>
  );
}

export default ModifProfil;
