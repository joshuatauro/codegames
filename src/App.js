import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Pages/Landing';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import { useEffect } from 'react';

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
      </Routes>
    </div>
  );
}

export default App;
