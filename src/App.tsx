import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HealthCheck from './components/HealthCheck';
import Metadata from './components/Metadata';
import CreatePatient from './components/CreatePatient';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex space-x-4">
            <Link to="/" className="text-white hover:text-blue-200 font-medium">Health</Link>
            <Link to="/metadata" className="text-white hover:text-blue-200 font-medium">Metadata</Link>
            <Link to="/create-patient" className="text-white hover:text-blue-200 font-medium">Create Patient</Link>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HealthCheck />} />
            <Route path="/metadata" element={<Metadata />} />
            <Route path="/create-patient" element={<CreatePatient />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
