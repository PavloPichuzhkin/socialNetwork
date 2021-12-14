import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initiolState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ],
  // newPostText: " posts text textarea",
  profile: null,
  status: "",
};
const profileReducer = (state = initiolState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: action.newPostText,
      likesCount: 0,
    };

    return {
      ...state,
      posts: [...state.posts, newPost],
    };
  }
  // else if (action.type === UPDATE_NEW_POST_TEXT) {
  //   return {
  //     ...state,
  //     newPostText: action.newText,
  //   };
  // }
  else if (action.type === SET_USER_PROFILE) {
    return {
      ...state,
      profile: action.profile,
    };
  } else if (action.type === SET_STATUS) {
    return {
      ...state,
      status: action.status,
    };
  }
  return state;
};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};
// export const updeteNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text,
//   };
// };
export const setUserProfileAC = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status: status,
  };
};

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfileAC(response));
    });
  };
};
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
