// Profile.js
import React, { useState } from "react";
import styles from "./Profile.module.css";

function Profile({ childClickHandler }) {
  const [visible, setVisible] = useState(false);

  const nom = "Chazot";
  const prenom = "Julien";
  const adresse = "112 Rue du Tilleul";
  const telephone = "0771707755";

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
          <div key={index}>
            <div className={styles.infos}>Mon nom : {item.nom}</div>
            <div className={styles.infos}>Mon prénom : {item.prenom}</div>
            <div className={styles.infos}>Mon adresse : {item.adresse}</div>
            <div className={styles.infos}>Mon numéro de telephone : {item.telephone}</div>
          </div>
        ))}
      </div>
    )}
  </>
);
        }

export default Profile;
