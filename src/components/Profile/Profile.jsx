// Profile.js
import React, { useState } from "react";
import styles from "./Profile.module.css";

function Profile({ childClickHandler, profileData }) {
  console.log(profileData);
  const [visible, setVisible] = useState(false);

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
          <div>
            <div className={styles.infos}>Mon nom : {profileData.nom}</div>
            <div className={styles.infos}>Mon prénom : {profileData.prenom}</div>
            <div className={styles.infos}>Mon adresse : {profileData.adresse}</div>
            <div className={styles.infos}>Mon numéro de téléphone : {profileData.telephone}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
