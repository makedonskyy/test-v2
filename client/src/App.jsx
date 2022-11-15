import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Vacancies from './Vacancies';
import Main from './Main';
import vacancy from './test.json';
import PersonForm from './Form';

function App() {
  const data = vacancy.source.vacancies[0].vacancy;
  console.log(data[0].updatedate[0]);
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/vacancies" element={<Vacancies data={data} />} />
        <Route path="/form" element={<PersonForm />} />
      </Routes>
    </div>
  );
}

export default App;
