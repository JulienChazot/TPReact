// Profile.js
import React, { useState } from "react";
import styles from "./Profile.module.css";

function Profile({ childClickHandler }) {
  const [visible, setVisible] = useState(false);

  const data = [
    {
      "nom": "Chazot",
      "prenom" : "Julien",
      "adresse": "112 Rue du Tilleul",
      "téléphone": "0771707755"
    }
  ];

  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
          childClickHandler("test");
        }}
      >
        Voir le profil
      </button>

      {visible && (
      <div className={styles.profil}>
        {data.map((item, index) => (
          <div key={index} className={styles.infos}>
            <div>Mon nom : {item.nom}</div>
            <div>Mon prénom : {item.prenom}</div>
            <div>Mon adresse : {item.adresse}</div>
            <div>Mon numéro de téléphone : {item.téléphone}</div>
          </div>
        ))}
      </div>
    )}
  </>
);
        }

export default Profile;
