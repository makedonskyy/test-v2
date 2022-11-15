import React, { useEffect, useState } from 'react';
import OneVacancy from './OneVacancy';

const filterSearch = (search, vacanciesList) => {
  if (!search) {
    return vacanciesList;
  }
  return vacanciesList.filter((el) => el.jobname[0]
    .toLowerCase().includes(search.toLowerCase()));
};

export default function Vacancies({ data }) {
  const [list, setList] = useState(data);
  const [serchingVacancies, setSerchingVacancies] = useState('');

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filtered = filterSearch(serchingVacancies, data);
      setList(filtered);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [serchingVacancies]);

  return (
    <div className="container">
      <div className="container mx-auto font-mono">
        <div className="text-3xl text-center py-3">Поиск вакансии</div>
        <div className="flex justify-center flex-col align-middle">
          <input
            type="text"
            autoComplete="off"
            placeholder="Введите название"
            onChange={(e) => setSerchingVacancies(e.target.value)}
            className="w-100 text-stone-900 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-sm py-2 px-3 shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mx-auto"
            style={{
              width: '600px',
            }}
          />
          <div id="slider" />
          {
        list
        && list?.map((el) => (
          <OneVacancy
            vacancy={el}
            key={el.description}
          />
        ))
    }
        </div>
      </div>
    </div>
  );
}
