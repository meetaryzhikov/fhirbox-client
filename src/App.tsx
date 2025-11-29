import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HealthCheck from './components/HealthCheck';
import Metadata from './components/Metadata';
import CreatePatient from './components/CreatePatient';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Health</Link> | <Link to="/metadata">Metadata</Link> | <Link to="/create-patient">Create Patient</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HealthCheck />} />
          <Route path="/metadata" element={<Metadata />} />
          <Route path="/create-patient" element={<CreatePatient />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
