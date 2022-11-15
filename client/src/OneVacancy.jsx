import React from 'react';
import { Link } from 'react-router-dom';

export default function OneVacancy({ vacancy }) {
//   console.log(vacancy);
  return (
    <div className="card" style={{ marginTop: '50px' }}>
      <div className="card-body">
        <h5 className="card-title">{vacancy.jobname[0]}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {
        `${vacancy.salary[0]} ${vacancy.currency}`
}

        </h6>
        <Link to={`/vacancies/${vacancy.updatedate[0]}`} className="btn btn-secondary">Подробнее</Link>
      </div>
    </div>
  );
}
