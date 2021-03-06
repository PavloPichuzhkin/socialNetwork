import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  // console.log(props);
  return (
    <div>
      <ProfileInfo profile={props.profile} {...props} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
