import { SET_URL, CHECK_TOP_BUTTON, SEND_EMAIL } from './types';
import { push } from 'react-router-redux';
import axios from 'axios';

export const setUrl = to => dispatch => {
  dispatch(push('/' + to));
  dispatch({ type: SET_URL, payload: to });
};

export const checkTopButton = status => dispatch => {
  dispatch({ type: CHECK_TOP_BUTTON, payload: status });
};

export const sendEmail = (emailFrom, message) => async dispatch => {
  let loading = 'loading';
  let success = false;
  let status = {loading, success};
  dispatch({ type: SEND_EMAIL, payload: status });
  try {
    const submitForm = await axios.post(
      'https://formspree.io/franckboudraa@gmail.com',
      {
        data: {
          name: emailFrom,
          email: emailFrom,
          message: message,
        },
      },
    );

    //console.log(submitForm);

    success = true;
    loading = 'ended';
    status = {loading, success};
  } catch (error) {
    //console.log(error);
    success = false;
    loading = 'ended';
    status = {loading, success};
  }
  dispatch({ type: SEND_EMAIL, payload: status });
};
