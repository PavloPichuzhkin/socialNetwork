import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = (props) => {
  // console.log(props);
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div>
        <img
          alt=""
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
        />
      </div> */}
      {/* <ProfileStatus status={props.status} {...props} /> */}
      <ProfileStatusWithHook status={props.status} {...props} />

      <div className={s.descriptionBlock}>
        <img alt="" src={props.profile.photos.large} />
        <div> ava + description: {props.profile.aboutMe}</div>
        <div>{Object.keys(props.profile.contacts)}</div>
        <div>{Object.keys(props.profile.contacts)[0]}</div>
        <div>facebook: {props.profile.contacts.facebook}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
