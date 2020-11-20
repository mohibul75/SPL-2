/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { editLessonConstants } from '../constants';
import { editLessonDataService } from '../services/editLessonService';
import { alertActions } from './alert.actions';
import { store } from '../helpers/store';

export const editLessonActions = {
  fetchLesson
};

function fetchLesson(id) {
  return dispatch => {
    request(id);
    // eslint-disable-next-line promise/catch-or-return
    return  editLessonDataService
      .getLesson(id)
      .then(
        // eslint-disable-next-line promise/always-return
        data => {
        dispatch(success(data));
        }
      )
      .catch(error => {
        console.log(error);
        dispatch(alertActions.error(error));
      });
  };
}

  function request(lessonID) {
    return { type: editLessonConstants.FETCH, lessonID };
  }
  function success(lessonData) {
    // console.log(lessonData);
    return { type: editLessonConstants.SUCCESS, lessonData };
  }
