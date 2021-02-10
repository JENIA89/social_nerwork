const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GET_USERS = 'GET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_LOADING = 'IS_LOADING';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

const initState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  loading: false,
  toggleLoading: [],
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
        users: [...action.payload],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: action.payload,
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

export const setCurrentPage = (currentNum) => ({
  type: SET_CURRENT_PAGE,
  payload: currentNum,
});
export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: totalCount,
});
export const setIsLoading = (load) => ({
  type: IS_LOADING,
  payload: load,
});
export const toggleLoading = (load) => ({
  type: TOGGLE_LOADING,
  payload: load,
});
