import React, { useEffect, useState } from 'react';
import OneVacancy from './OneVacancy';
import vacancy from './test.json';

export default function Vacancies() {
  // console.log(vacancy.source.vacancies[0].vacancy);
  return (
    <div className="row">
      {
        vacancy?.source?.vacancies[0]?.vacancy
        && vacancy?.source?.vacancies[0]?.vacancy?.map((el) => (
          <OneVacancy
            vacancy={el}
            key={el.description}
          />
        ))
    }
    </div>
  );
}
