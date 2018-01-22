import { combineReducers } from 'redux';
import urlReducer from './urlReducer';
import topButtonReducer from './topButtonReducer';

export default combineReducers({
  url:urlReducer,
  topButton:topButtonReducer
});