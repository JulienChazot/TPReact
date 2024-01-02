import './App.css'
import Profile from './components/Profile/Profile';
import ModifProfil from './components/ModifProfil/ModifProfil';
import viteLogo from '/vite.svg'

function App() {
  const onClickHandler = (text) => {
    console.log(`Clicked with text: ${text}`);
    // Ajoutez ici le traitement que vous souhaitez effectuer
  };

  const data = [
    {
      "nom": "Chazot",
      "prenom": "Julien",
      "adresse": "112 Rue du Tilleul",
      "telephone": "0771707755"
    }
  ];

  return (
    <>
    <div className="header">
      <div className="titre">TP de Julien CHAZOT</div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
    </div>
    <div className="main">
      <h1>Mon Profil Vite + React</h1>
      <div className="mesinfos">
        <h2>Mon profil</h2>
        <Profile childClickHandler={onClickHandler} data={data} />
      </div>
      <div className="majinfos">
        <h2>Modifier le profil</h2>
        <ModifProfil childClickHandler={onClickHandler} data={data} />
      </div>
    </div>
    <div className="footer">
      <div className="developed">Developped by Julien Chazot</div>
    </div>
    </>
  );
}

export default App;
