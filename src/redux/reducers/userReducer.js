const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GET_USERS = 'GET_USERS';

const initState = {
  users: [
    {
      id: 1,
      userPhoto:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/250px-Elon_Musk_Royal_Society_%28crop1%29.jpg',
      followed: false,
      fullName: 'Evgene',
      location: { city: 'Minsk', country: 'Belarus' },
    },
    {
      id: 2,
      userPhoto:
        'https://n1s1.hsmedia.ru/ab/a1/af/aba1af5dc814b38752aa829ffc79fac8/620x462_1_0826e2e910d9c36df2ef409a75b591aa@1000x745_0xac120003_17550086621567090673.jpg',
      followed: true,
      fullName: 'John',
      location: { city: 'Minsk', country: 'Belarus' },
    },
    {
      id: 3,
      userPhoto:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpX_uXUc-_jVvjKpOi0v1S2WjT9MKHzU4Hg&usqp=CAU',
      followed: true,
      fullName: 'Alex',
      location: { city: 'Los-Angeles', country: 'America' },
    },
  ],
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
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;

export const followActionCreator = (userId) => ({
  type: FOLLOW,
  payload: userId,
});

export const unFollowActionCreator = (userId) => ({
  type: UNFOLLOW,
  payload: userId,
});

export const getUsersActionCreator = (users) => ({
  type: GET_USERS,
  payload: users,
});
