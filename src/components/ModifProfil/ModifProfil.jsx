// ModifProfil.js
import React, { useState } from "react";
import styles from "./ModifProfil.module.css";

function ModifProfil({ childClickWandler }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
          childClickWandler("test");
        }}
      >
        Modifier le profil
      </button>

      {visible && (
        <div className={styles.modifprofil}>
            <input type="text" placeholder="Nouveau nom :" />
            <input type="text" placeholder="Nouveau prénom :" />
            <input type="text" placeholder="Nouvelle adresse: " />
            <input type="text" placeholder="Nouveau numéro de téléphone :" />
            <button>Modifier</button>
          </div>
      )}
    </>
  );
}

export default ModifProfil;
