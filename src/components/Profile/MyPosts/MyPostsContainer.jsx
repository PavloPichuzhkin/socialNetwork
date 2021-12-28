import React from "react";
import s from "./MyPosts.module.css";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  deletePostAC,
} from "../../../redux/profilepage-reduser";
// import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";
import MyPostsClass from "./MyPostsClass";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostsText) => {
      dispatch(addPostActionCreator(newPostsText));
    },
    deletePost: (postId) => {
      let action = deletePostAC(postId);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  
)(MyPosts);
export default MyPostsContainer;
