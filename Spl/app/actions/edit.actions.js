/* eslint-disable import/prefer-default-export */
import { editConstants } from '../constants';
import { addElementService } from '../services';
import { alertActions } from './alert.actions';

export const editActions = {
  pending
};

function pending(element) {
  console.log(element);
  return dispatch => {
    dispatch(request(element));

    // eslint-disable-next-line promise/catch-or-return,promise/always-return
    addElementService.addElement(element).then(
      // eslint-disable-next-line promise/always-return
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
