import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import Card1 from './components/Card1';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import Card2 from './components/Card2';
import ForthPage from './components/ForthPage';
import Card3 from './components/Card3';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstPage />
      <Card1 />
      <SecondPage />
      <ThirdPage />
      <Card2 />
      <ForthPage />
      <Card3 />
      <Footer />
    </div>
  );
}

export default App;
