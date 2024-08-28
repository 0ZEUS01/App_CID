import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import views
import Home from './views/home';
import HomeCA from './CadreAdmin/homeCA';
import AddAffaireCA from './CadreAdmin/addAffaireCA';
import AfficherAffaireCA from './CadreAdmin/afficherAffaireCA';
import AddMissionCA from './CadreAdmin/addMissionCA';
import AfficherMissionCA from './CadreAdmin/afficherMissionCA';
import HomeCP from './ChefPole/homeCP';
import AfficherAffaireCP from './ChefPole/afficherAffaireCP';
import HomeCD from './ChefDiv/homeCD';
import AfficherAffaireCD from './ChefDiv/afficherAffaireCD';
import AddDivisionsCD from './ChefDiv/addDivisionsCD';
import AfficherMissionCD from './ChefDiv/afficherMissionCD';
import HomeCDP from './ChefProjet/homeCDP';
import AfficherAffaireCDP from './ChefProjet/afficherAffaireCDP';
import AddUnite from './Admin/Unite/addUnite';

// Define routes
const routes = [
  { path: '/', element: Home },
  { path: '/HomeCA', element: HomeCA },
  { path: '/addAffaireCA', element: AddAffaireCA },
  { path: '/afficherAffaireCA', element: AfficherAffaireCA },
  { path: '/AddMissionCA', element: AddMissionCA },
  { path: '/AfficherMissionCA', element: AfficherMissionCA },
  { path: '/HomeCP', element: HomeCP },
  { path: '/afficherAffaireCP', element: AfficherAffaireCP },
  { path: '/HomeCD', element: HomeCD },
  { path: '/afficherAffaireCD', element: AfficherAffaireCD },
  { path: '/AddDivisionsCD', element: AddDivisionsCD },
  { path: '/afficherMissionCD', element: AfficherMissionCD },
  { path: '/HomeCDP', element: HomeCDP },
  { path: '/afficherAffaireCDP', element: AfficherAffaireCDP },
  { path: '/addUnite', element: AddUnite },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
