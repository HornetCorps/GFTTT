import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Community from './components/pages/community';
import Inventory from './components/pages/inventory';
import Play from './components/pages/play';
import Profile from './components/pages/profile';
import Tools from './components/pages/tools';
import Footer from './components/Footer';
import Help  from './components/pages/help';
import Login from './components/pages/login';
import Register from './components/pages/register';
function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/community' exact element={<Community />}/>
          <Route path='/help' exact element={<Help />}/>
          <Route path='/inventory' exact element={<Inventory />}/>
          <Route path='/play' exact element={<Play />}/>
          <Route path='/profile' exact element={<Profile />}/>
          <Route path='/tools' exact element={<Tools />}/>
          <Route path='/login' exact element={<Login />}/>
          <Route path='/register' exact element={<Register />}/>

        </Routes>
        
        <Footer />
    </>
  );
}

export default App;
