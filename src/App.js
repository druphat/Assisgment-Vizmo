import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import EntryDetail from './Component/EntryDetail'; // You'll need to create this component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entry/:id" element={<EntryDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
