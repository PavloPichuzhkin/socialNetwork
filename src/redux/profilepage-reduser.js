import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initiolState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ],
  profile: null,
  status: "",
  count: 2,
};

const profileReducer = (state = initiolState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: state.count + 1,
      message: action.newPostText,
      likesCount: 0,
    };
    console.log(state);
    return {
      ...state,
      posts: [...state.posts, newPost],
      count: state.count + 1,
    };
  } else if (action.type === SET_USER_PROFILE) {
    return {
      ...state,
      profile: action.profile,
    };
  } else if (action.type === SET_STATUS) {
    return {
      ...state,
      status: action.status,
    };
  } else if (action.type === DELETE_POST) {
    return {
      ...state,
      posts: [...state.posts.filter((post) => post.id !== action.postId)],
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
export const deletePostAC = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfileAC(response));
  };
};
export const getStatus = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
};
export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export default profileReducer;
