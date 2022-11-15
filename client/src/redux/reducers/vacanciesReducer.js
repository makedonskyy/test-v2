import {
  GET_VAC,
} from '../types';

// eslint-disable-next-line default-param-last
export default function vacanciesReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_VAC:
      return payload;
    default:
      return state;
  }
}
