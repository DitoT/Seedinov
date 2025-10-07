import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import VoiceInput from './pages/VoiceInput';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voice-input" element={<VoiceInput />} />
      </Routes>
    </Router>
  );
}

export default App;
