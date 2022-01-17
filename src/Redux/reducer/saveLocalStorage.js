import { LOCAL_STORAGE, SAVE_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  picture: '',
  score: 0,
};

const saveLocalStorage = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOCAL_STORAGE: {
    return {
      ...state,
      name: action.ranking.name,
      picture: action.ranking.picture,
    };
  }
  case SAVE_SCORE: {
    return {
      ...state,
      score: state.score + action.score,
    };
  }
  default:
    return state;
  }
};

export default saveLocalStorage;