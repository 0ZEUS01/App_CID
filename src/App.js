import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageMeta from './PageMeta';
import Home from './views/home.jsx';
import AddAffire from './views/addAffaire.jsx';

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
      </Routes>
    </div>
  </Router>
  );
}

export default App;
