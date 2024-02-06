
import { createStore } from 'redux';

const initialState = {
  movieRating: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE_RATING':
      return { ...state, movieRating: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
