import { combineReducers } from 'redux';
import { USER } from './actions';

const user = (state = [], action) => {
  switch(action.type) {
    case USER:
      return action.user;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ user });

export default rootReducer;