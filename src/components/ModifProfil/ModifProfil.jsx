import React, { useState } from 'react';
import styles from './ModifProfil.module.css';

function ModifProfil({ childClickHandler, data, onDataUpdate }) {
  const [visible, setVisible] = useState(false);
  const [newData, setNewData] = useState({
    nom: data[0].nom,
    prenom: data[0].prenom,
    adresse: data[0].adresse,
    telephone: data[0].telephone
  });

  
  const handleInputChange = (e, fieldName) => {
    setNewData((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value
    }));
  };

  const handleModifierClick = () => {
    onDataUpdate(newData);
    setVisible(false);
    childClickHandler("test");
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
            placeholder="Nouveau numéro de telephone"
            value={newData.telephone}
            onChange={(e) => handleInputChange(e, "telephone")}
          />
          <button onClick={handleModifierClick}>Modifier</button>
        </div>
      )}
    </>
  );
}

export default ModifProfil;
