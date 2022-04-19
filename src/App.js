import React, {useState} from 'react';
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
import BuildCharacter from './components/pages/buildCharacter';
import ViewCharacter from "./components/pages/viewCharacter";
function App() {
  const [userID, setUserID] = useState("");
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/community' exact element={<Community />}/>
          <Route path='/help' exact element={<Help />}/>
          <Route path='/inventory' exact element={<Inventory userID={userID} />}/>
          <Route path='/play' exact element={<Play />}/>
          <Route path='/profile' exact element={<Profile />}/>
          <Route path='/tools' exact element={<Tools />}/>
          <Route path='/login' exact element={<Login user={[userID, setUserID]} />}/>
          <Route path='/register' exact element={<Register user={[userID, setUserID]} />}/>
          <Route path='/buildCharacter' exact element={<BuildCharacter userID={userID}/>}/>
          <Route path='/viewCharacter' exact element={<ViewCharacter />}/>

        </Routes>

        <Footer />
    </>
  );
}

export default App;
