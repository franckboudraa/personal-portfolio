import { SET_URL, CHECK_TOP_BUTTON } from "./types";
import { push } from 'react-router-redux'

export const setUrl = (to) => dispatch => {
  dispatch(push('/'+to));
  dispatch({ type: SET_URL, payload: to });
};

export const checkTopButton = (status) => dispatch => {
  dispatch({ type: CHECK_TOP_BUTTON, payload: status });
};