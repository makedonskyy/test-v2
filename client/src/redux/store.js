import { configureStore } from '@reduxjs/toolkit';
import vacanciesReducer from './reducers/vacanciesReducer';

export default configureStore({
  reducer: {
    vacancies: vacanciesReducer,
  },
});
