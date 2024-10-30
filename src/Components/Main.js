import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import './Home.css';

// The Main component renders one of the provided
// Routes (provided that one matches). In React Router v6,
// exact matching is the default behavior.
const Main = () => (
  <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      {/* Add more routes here as needed */}
    </Routes>
  </main>
);

export default Main;