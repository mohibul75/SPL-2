import { openLessonConstants } from '../constants';
import { openLesson } from '../services/openLesson.service';
import { alertActions } from './alert.actions';

// eslint-disable-next-line import/prefer-default-export
export const openLessonAction = {
  fetchLesson
};

function fetchLesson() {
  return dispatch => {
    request();
    // eslint-disable-next-line promise/catch-or-return
    return openLesson
      .getLesson()
      .then(
        // eslint-disable-next-line promise/always-return
        data => {
          console.log(data);
          dispatch(success(data));
        }
      )
      .catch(error => {
        console.log(error);
        dispatch(alertActions.error(error));
      });
  };

  function request() {
    return { type: openLessonConstants.FETCH };
  }
  function success(lessonData) {
    return { type: openLessonConstants.SUCCESS, lessonData };
  }
}
