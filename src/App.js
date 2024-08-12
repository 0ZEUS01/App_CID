import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageMeta from './PageMeta';
import Home from './CadreAdmin/homeCA.jsx';
import AddAffire from './CadreAdmin/addAffaireCA.jsx';
import AfficherAffaire from './CadreAdmin/afficherAffaireCA.jsx';
import AddMission from './CadreAdmin/addMissionCA.jsx'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageMeta title="Home | CID" />
              <Home />
            </>
          }
        />
        <Route
          path="/addAffaire"
          element={
            <>
              <PageMeta title="Ajouter une Affaire | CID" />
              <AddAffire />
            </>
          }
        />
        <Route
          path="/afficherAffaire"
          element={
            <>
              <PageMeta title="Afficher les Affaires | CID" />
              <AfficherAffaire />
            </>
          }
        />
        <Route
          path="/AddMission"
          element={
            <>
              <PageMeta title="Ajouter les Mission | CID" />
              <AddMission />
            </>
          }
        />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
