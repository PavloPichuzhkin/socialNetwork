import React, { Component } from "react";
import Profile from "./Profile";
// import * as axios from "axios";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profilepage-reduser";
import { Redirect, withRouter } from "react-router";
import Login from "../Login/Login";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
// import { getProfile } from "../../api/api";
class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    // console.log(this.props);
    // console.log(this);
    if (!userId) {
      userId =
        // 2;
        this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login"); // + in Header.jsx Redirect
      }
    }
    this.props.getUser(userId);
    this.props.getStatus(userId);
    // this.props.updateStatus({ status: "YOR mayor wozanah" });
  }
  render() {
    // debugger;
    // console.log("RENDER PROFILE");
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  console.log("mapStateToProps PROFILE");
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};
// let AuthRedirectComponent = (props) => {
//   if (!this.props.isAuth) return <Redirect to="/login" />;
//   return <ProfileContainer {...props} />;
// };
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getUser: getUserProfile })(
//   WithURLDataContainerComponent
// );
export default compose(
  connect(mapStateToProps, {
    getUser: getUserProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
