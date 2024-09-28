import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
