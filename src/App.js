import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Pages/Landing';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import { useEffect } from 'react';
import ReverseCoding from './Pages/ReverseCoding';
import ValorantTournament from './Pages/ValorantTournament';
import BugBounty from './Pages/BugBounty';
import DeCrypto from './Pages/DeCrypto';
import DevCon from './Pages/DevCon';
import InstaFun from './Pages/InstaFun';
import CodeConqueror from './Pages/CodeConqueror';
import BlindCoding from './Pages/BlindCoding';

function App() {
  useEffect(() => {
    document.title="CodeGames"
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/know-more/reverse-coding" element={<ReverseCoding />} />
        <Route path="/know-more/valorant-tournament" element={<ValorantTournament />} />
        <Route path="/know-more/bug-bounty" element={<BugBounty />} />
        <Route path="/know-more/decrypto" element={<DeCrypto />} />
        <Route path="/know-more/devcon" element={<DevCon />} />
        <Route path="/know-more/insta-fun" element={<InstaFun />} />
        <Route path="/know-more/code-conqueror" element={<CodeConqueror />} />
        <Route path="/know-more/blind-coding" element={<BlindCoding />} />



      </Routes>
    </div>
  );
}

export default App;
