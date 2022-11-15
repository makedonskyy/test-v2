import axios from 'axios';
import { GET_VAC } from '../types';

export const setVacancies = (payload) => ({ type: GET_VAC, payload });

export const setVacanciesAsync = () => (dispatch) => {
  axios('/api/vacancies')
    .then((data) => dispatch(setVacancies(data.data)))
    .then((data) => console.log(data))
    .catch(console.log);
};
