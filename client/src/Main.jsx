import React from 'react';
import { Link } from 'react-router-dom';
import AboutComp from './About';
import Slider from './Slider';

export default function Main() {
  return (
    <div>
      {' '}
      <Slider />
      <AboutComp />
      <Link to="/vacancies" className="btn btn-outline-primary btn-lg" style={{ marginTop: '3%', marginLeft: '40%', marginBottom: '3%' }}>Посмотреть вакансии</Link>
    </div>
  );
}
