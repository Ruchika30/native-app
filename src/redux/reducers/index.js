import {SET_AUTH} from '../constants';

const initialState = {
  count: 0,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
