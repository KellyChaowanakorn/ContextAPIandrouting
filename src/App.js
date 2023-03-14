import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
// import { useState   } from 'react';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';



export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("RuckyTechnology");

  return (
    <div className="App">
      <AppContext.Provider value={{username,setUsername}}>
        <Router>
          <div>

            <Link to="/">Home </Link>
            <Link to="/menu">Menu </Link>
            <Link to="/contact">Contact </Link>
            <Link to="/profile">Profile  </Link>

          </div>
          <Routes>

            <Route path="/" element={<Home  />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/profile" element={<Profile  />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page is not found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>

  );
}


export default App;
