import logo from './logo.svg';
import './App.css';
import Landing from './Pages/Landing';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import ReverseCoding from './Pages/ReverseCoding';
import ValorantTournament from './Pages/ValorantTournament';
import BugBounty from './Pages/BugBounty';
import DeCrypto from './Pages/DeCrypto';
import InstaFun from './Pages/InstaFun';
import CodeConqueror from './Pages/CodeConqueror';
import BlindCoding from './Pages/BlindCoding';
import Instantaneous from './Pages/Instantaneous';

function App() {
  useEffect(() => {
    document.title="CodeGames"
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/know-more/reverse-coding" element={<ReverseCoding />} />
        <Route path="/know-more/valorant-tournament" element={<ValorantTournament />} />
        <Route path="/know-more/bug-bounty" element={<BugBounty />} />
        <Route path="/know-more/decrypto" element={<DeCrypto />} />
        <Route path="/know-more/insta-fun" element={<InstaFun />} />
        <Route path="/know-more/code-conqueror" element={<CodeConqueror />} />
        <Route path="/know-more/blind-coding" element={<BlindCoding />} />
        <Route path="/know-more/insta-ntaneous" element={<Instantaneous />} />

      </Routes>
    </div>
  );
}

export default App;
