import React from 'react';

export default function OneVacancy({ vacancy }) {
  console.log(vacancy);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        {/* <h6 className="card-subtitle mb-2 text-muted">{}</h6> */}
        <p className="card-text">
          Some quick example text to build on the card title
          and make up the bulk of the cards content.

        </p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
  );
}
