import { useState } from 'react'
import './App.css'
import Profile from './components/Profile/Profile';
import ModifProfil from './components/ModifProfil/ModifProfil';

function App() {

  const [name, setName] = useState("React");

  function onClickHandler(test) {
    setName("Vite");
    console.log("je proviens du composant enfant: ", test);
    setName((prev) => {
      return prev + "Vite";
    });
  }

  function onClickModif(test) {
    setName("Vite");
    console.log("je proviens du composant enfant: ", test);
    setName((prev) => {
      return prev + "Vite";
    });
  }
  return (
    <>
      <div className="header">

      </div>
      <div className="main">
        <h1>Mon Profil Vite + React</h1>
        <div className="mesinfos">
          <h2>Mon profil</h2>
          <Profile childClickHandler={onClickHandler} />
        </div>
        <div className="majinfos">
          <h2>Modifier mon profil</h2>
          <ModifProfil childClickModif={onClickModif} />
        </div>
      </div>
      <div className="footer">

      </div>
    </>
  )
}

export default App
