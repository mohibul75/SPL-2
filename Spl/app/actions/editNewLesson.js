/* eslint-disable import/named */
/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
/* eslint-disable import/prefer-default-export */
import { editConstants } from '../constants/edits';
// eslint-disable-next-line no-unused-vars
import { addLessonService } from '../services';
import { alertActions } from './alert.action';

export const editNewLessonActions = {
  pending
};

function pending(lesson) {
  console.log(lesson);
  return dispatch => {
    dispatch(request(lesson));

    addLessonService.addLesson(lesson).then(
      data => {
        dispatch(success(data));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(value) {
    return { type: editConstants.PENDING, value };
  }

  function success(data) {
    return { type: editConstants.SUBMITTED, data };
  }

  function failure(error) {
    return { type: editConstants.FAILED, error };
  }
}
