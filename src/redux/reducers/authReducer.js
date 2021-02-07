const SET_AUTH_USER = 'SET_AUTH_USER';

const initState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };

    default:
      return state;
  }
};

export default authReducer;

export const setAuthUser = (data) => ({
  type: SET_AUTH_USER,
  payload: data,
});
