const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GET_USERS = 'GET_USERS';

const initState = {
  users: [],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload ? { ...user, followed: true } : user
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload ? { ...user, followed: false } : user
        ),
      };
    case GET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;

export const follow = (userId) => ({
  type: FOLLOW,
  payload: userId,
});

export const unFollow = (userId) => ({
  type: UNFOLLOW,
  payload: userId,
});

export const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});
