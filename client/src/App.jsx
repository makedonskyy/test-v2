import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Vacancies from './Vacancies';
import Main from './Main';

function App() {
  const a = 'hi';
  console.log(a);
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/vacancies" element={<Vacancies />} />
      </Routes>
    </div>
  );
}

export default App;
