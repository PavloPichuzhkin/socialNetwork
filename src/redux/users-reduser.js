import { usersAPI } from "../api/api";
import { updeteObjectInArray } from "../utils/validator/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FATCHING = "TOGGLE_IS_FATCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";
const FAKE = "FAKE";

let initiolState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFatching: false,
  followingInProgres: [],
  fake: 1,
};

const usersReduser = (state = initiolState, action) => {
  // console.log(action);
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updeteObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: updeteObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: false };
        //   }
        //   return { ...user }; // return user;
        // }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        // users: [...state.users, ...action.users],
        users: [...action.users], //=== users: action.users,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case TOGGLE_IS_FATCHING: {
      return {
        ...state,
        isFatching: action.isFatching,
      };
    }
    case TOGGLE_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgres: action.isFatching
          ? [...state.followingInProgres, action.userId]
          : state.followingInProgres.filter((id) => id !== action.userId),
      };
    }
    case FAKE: {
      return {
        ...state,
        fake: state.fake + 1,
      };
    }
    default: {
      return state;
    }
  }
};

export const followSucces = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unFollowSucces = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  };
};
export const toggleIsFatching = (isFatching) => {
  return {
    type: TOGGLE_IS_FATCHING,
    isFatching,
  };
};
export const toggleFollowingProgressAC = (isFatching, userId) => {
  return {
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFatching,
    userId,
  };
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFatching(true));
    usersAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(toggleIsFatching(false));
      dispatch(setUsers(response.items));
      // dispatch(setTotalUsersCount(response.totalCount));
      dispatch(setTotalUsersCount(200));
    });
  };
};

const followUnfollowFlow = async (
  userId,
  dispatch,
  apiMathod,
  actionCreater
) => {
  dispatch(toggleFollowingProgressAC(true, userId));

  let response = await apiMathod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreater(userId));
  }

  dispatch(toggleFollowingProgressAC(false, userId));
};

export const follow = (userId) => {
  return (dispatch) => {
    followUnfollowFlow(
      userId,
      dispatch,
      usersAPI.follow.bind(usersAPI),
      followSucces
    );
  };
};

export const unFollow = (userId) => {
  return async (dispatch) => {
    let apiMathod = usersAPI.unFollow.bind(usersAPI);
    let actionCreater = unFollowSucces;
    followUnfollowFlow(userId, dispatch, apiMathod, actionCreater);
  };
};
// export const follow = (userId) => {
//   return async (dispatch) => {
//     let apiMathod = usersAPI.follow.bind(usersAPI);
//     let actionCreater = followSucces;
//     dispatch(toggleFollowingProgressAC(true, userId));

//     let response = await apiMathod(userId);

//     if (response.data.resultCode === 0) {
//       dispatch(actionCreater(userId));
//     }

//     dispatch(toggleFollowingProgressAC(false, userId));
//   };
// };

// export const unFollow = (userId) => {
//   return async (dispatch) => {
//     let apiMathod = usersAPI.unFollow.bind(usersAPI);
//     let actionCreater = unFollowSucces;
//     dispatch(toggleFollowingProgressAC(true, userId));

//     let response = await apiMathod(userId);

//     if (response.data.resultCode === 0) {
//       dispatch(actionCreater(userId));
//     }
//     dispatch(toggleFollowingProgressAC(false, userId));
//   };
// };

// export const follow = (userId) => {
//   return (dispatch) => {
//     dispatch(toggleFollowingProgressAC(true, userId));

//     usersAPI
//       .follow(userId)
//       .then((response) => {
//         if (response.data.resultCode === 0) {
//           dispatch(followSucces(userId));
//         }

//         console.log(response);
//       })
//       .then(() => {
//         dispatch(toggleFollowingProgressAC(false, userId));
//       });
//   };
// };

// export const unFollow = (userId) => {
//   return (dispatch) => {
//     dispatch(toggleFollowingProgressAC(true, userId));

//     usersAPI
//       .unFollow(userId)
//       .then((response) => {
//         if (response.data.resultCode === 0) {
//           // dispatch(unFollow(userId));
//           dispatch(unFollowSucces(userId));
//         }

//         console.log(response);
//       })
//       .then(() => {
//         dispatch(toggleFollowingProgressAC(false, userId));
//       });
//   };
// };

export default usersReduser;
