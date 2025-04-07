import { useState } from 'react';

import './App.css';
import Navbar from './component/common/Navbar';
import Pageroutes from './routes/Pageroutes';
import Footer from './component/common/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Pageroutes/>
    <Footer/>
    </>
  );
}

export default App;
