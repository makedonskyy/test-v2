import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Vacancies from './Vacancies';
import Main from './Main';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setVacanciesAsync());
  // }, []);
  // const data = useSelector((state) => state.vacancies);
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
