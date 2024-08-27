import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageMeta from './PageMeta';
import Home from './views/home.jsx';
import HomeCA from './CadreAdmin/homeCA.jsx';
import AddAffireCA from './CadreAdmin/addAffaireCA.jsx';
import AfficherAffaireCA from './CadreAdmin/afficherAffaireCA.jsx';
import AddMissionCA from './CadreAdmin/addMissionCA.jsx';
import AfficherMissionCA from './CadreAdmin/afficherMissionCA.jsx';
import HomeCP from './ChefPole/homeCP.jsx';
import AfficherAffaireCP from './ChefPole/afficherAffaireCP.jsx';
import HomeCD from './ChefDiv/homeCD.jsx';
import AfficherAffaireCD from './ChefDiv/afficherAffaireCD.jsx';
import AddDivisionsCD from './ChefDiv/addDivisionsCD.jsx';
import AfficherMissionCD from './ChefDiv/afficherMissionCD.jsx';
import HomeCDP from './ChefProjet/homeCDP.jsx';
import AfficherAffaireCDP from './ChefProjet/afficherAffaireCDP.jsx';
import AddUnite from './Admin/Unite/addUnite.jsx';

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

          {/* Cadre Administrative */}<>
            <Route
              path="/HomeCA"
              element={
                <>
                  <PageMeta title="Home | CID" />
                  <HomeCA />
                </>
              }
            />
            <Route
              path="/addAffaireCA"
              element={
                <>
                  <PageMeta title="Ajouter une Affaire | CID" />
                  <AddAffireCA />
                </>
              }
            />
            <Route
              path="/afficherAffaireCA"
              element={
                <>
                  <PageMeta title="Afficher les Affaires | CID" />
                  <AfficherAffaireCA />
                </>
              }
            />
            <Route
              path="/AddMissionCA"
              element={
                <>
                  <PageMeta title="Ajouter les Mission | CID" />
                  <AddMissionCA />
                </>
              }
            />
            <Route
              path="/AfficherMissionCA"
              element={
                <>
                  <PageMeta title="Afficher les Mission | CID" />
                  <AfficherMissionCA />
                </>
              }
            />
          </>
          {/* Chef de Pole */}<>
            <Route
              path="/HomeCP"
              element={
                <>
                  <PageMeta title="Home | CID" />
                  <HomeCP />
                </>
              }
            />
            <Route
              path="/afficherAffaireCP"
              element={
                <>
                  <PageMeta title="Afficher les Affaires | CID" />
                  <AfficherAffaireCP />
                </>
              }
            />
          </>
          {/* Chef de Division */}<>
            <Route
              path="/HomeCD"
              element={
                <>
                  <PageMeta title="Home | CID" />
                  <HomeCD />
                </>
              }
            />
            <Route
              path="/afficherAffaireCD"
              element={
                <>
                  <PageMeta title="Afficher les Affaires | CID" />
                  <AfficherAffaireCD />
                </>
              }
            />
            <Route
              path="/AddDivisionsCD"
              element={
                <>
                  <PageMeta title="Afficher les Mission | CID" />
                  <AddDivisionsCD />
                </>
              }
            />

            <Route
              path="/afficherMissionCD"
              element={
                <>
                  <PageMeta title="Afficher les missions | CID" />
                  <AfficherMissionCD />
                </>
              }
            />
          </>
          {/* Chef de Projet */}<>
            <Route
              path="/HomeCDP"
              element={
                <>
                  <PageMeta title="Home | CID" />
                  <HomeCDP />
                </>
              }
            />
            <Route
              path="/afficherAffaireCDP"
              element={
                <>
                  <PageMeta title="Afficher les Affaires | CID" />
                  <AfficherAffaireCDP />
                </>
              }
            />
          </>
          {/* Admin */}<>
            <Route
              path="/addUnite"
              element={
                <>
                  <PageMeta title="Ajouter une nouvelle unite | CID" />
                  <AddUnite />
                </>
              }
            />

            <Route
              path="/afficherAffaireCDP"
              element={
                <>
                  <PageMeta title="Afficher les Affaires | CID" />
                  <AfficherAffaireCDP />
                </>
              }
            />
          </>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
