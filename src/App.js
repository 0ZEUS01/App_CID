import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageMeta from './PageMeta';

// Import views
import Home from './views/home';
import HomeCA from './CadreAdmin/homeCA';
import AddAffaireCA from './CadreAdmin/addAffaireCA';
import AfficherAffaireCA from './CadreAdmin/afficherAffaireCA';
import AddMissionCA from './CadreAdmin/addMissionCA';
import AfficherMissionCA from './CadreAdmin/afficherMissionCA';
import HomeCP from './ChefPole/homeCP';
import AfficherAffaireCP from './ChefPole/afficherAffaireCP';
import afficherMissionCP from './ChefPole/afficherMissionCP'
import HomeCD from './ChefDiv/homeCD';
import AfficherAffaireCD from './ChefDiv/afficherAffaireCD';
import AddDivisionsCD from './ChefDiv/addDivisionsCD';
import AfficherMissionCD from './ChefDiv/afficherMissionCD';
import DesignationChefProjetCD from './ChefDiv/designationChefProjetCD';
import HomeCDP from './ChefProjet/homeCDP';
import AfficherAffaireCDP from './ChefProjet/afficherAffaireCDP';
import AfficherMissionCDP from './ChefProjet/afficherMissionCDP'
import ConsultMissionCDP from './ChefProjet/consultMissionCDP';
import AddUnite from './Admin/Unite/addUnite';

// Update the routes array with French titles
const routes = [
  { path: '/', element: Home, title: 'Accueil' },
  { path: '/HomeCA', element: HomeCA, title: 'Accueil - CID' },
  { path: '/addAffaireCA', element: AddAffaireCA, title: 'Ajouter Affaire - CID' },
  { path: '/afficherAffaireCA', element: AfficherAffaireCA, title: 'Afficher Affaire - CID' },
  { path: '/AddMissionCA', element: AddMissionCA, title: 'Ajouter Mission - CID' },
  { path: '/AfficherMissionCA', element: AfficherMissionCA, title: 'Afficher Mission - CID' },
  { path: '/HomeCP', element: HomeCP, title: 'Accueil - CID' },
  { path: '/afficherAffaireCP', element: AfficherAffaireCP, title: 'Afficher Affaire - CID' },
  { path: '/afficherMissionCP', element: afficherMissionCP, title: 'Afficher Mission - CID' },
  { path: '/HomeCD', element: HomeCD, title: 'Accueil - CID' },
  { path: '/afficherAffaireCD', element: AfficherAffaireCD, title: 'Afficher Affaire - CID' },
  { path: '/AddDivisionsCD', element: AddDivisionsCD, title: 'Ajouter Divisions - CID' },
  { path: '/afficherMissionCD', element: AfficherMissionCD, title: 'Afficher Mission - CID' },
  { path: '/designationChefProjetCD', element: DesignationChefProjetCD, title: 'Designation de Chef de Projet - CID' },
  { path: '/HomeCDP', element: HomeCDP, title: 'Accueil - CID' },
  { path: '/afficherAffaireCDP', element: AfficherAffaireCDP, title: 'Afficher Affaire - CID' },
  { path: '/afficherMissionCDP', element: AfficherMissionCDP, title: 'Afficher Mission - CID' },
  { path: '/consultMissionCDP', element: ConsultMissionCDP, title: 'Consulter Mission - CID' },
  { path: '/addUnite', element: AddUnite, title: 'Ajouter Unité' },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element: Element, title }) => (
          <Route 
            key={path} 
            path={path} 
            element={
              <>
                <PageMeta title={title} />
                <Element />
              </>
            } 
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
