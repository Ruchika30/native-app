import {SET_AUTH} from '../constants';

export function setAuthData(count) {
  return {
    type: SET_AUTH,
    payload: count,
  };
}
