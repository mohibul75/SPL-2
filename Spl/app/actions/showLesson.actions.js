/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { showLessonConstants } from '../constants';
import { getLessonDataService } from '../services/getLessonService';
import { alertActions } from './alert.actions';
import { store } from '../helpers/store';

export const showLessonActions = {
  fetchLesson
};

function fetchLesson(id) {
  return dispatch => {
    request(id);
    // eslint-disable-next-line promise/catch-or-return
    return  getLessonDataService
      .getLesson(id)
      .then(
        // eslint-disable-next-line promise/always-return
        data => {

        dispatch(success(data));
         // return data;

         //  console.log('from FCB action');
        //  console.log(store.getState());
        //  console.log('every ');
        //  console.log(dispatch(success(data)));
        // console.log(data.wordName);

        }
      )
      .catch(error => {
        console.log(error);
        dispatch(alertActions.error(error));
      });
  };
}

  function request(lessonID) {
    return { type: showLessonConstants.FETCH, lessonID };
  }
  function success(lessonData) {
    // console.log(lessonData);
    return { type: showLessonConstants.SUCCESS, lessonData };
  }
