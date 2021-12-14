import React from "react";

import Header from "./Header";

import { connect } from "react-redux";

import { getUserData, logout } from "../../redux/auth-reduser";

class HeaderContainer extends React.Component {
  componentDidMount() {
    // this.props.getUserData();
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //     withCredentials: true,
    //   })
    // .then((response) => {
    //   if (response.resultCode === 0) {
    //     let { id, email, login } = response.data; //response.data.data
    //     // setUserDataAC(response.data.data.login);
    //     this.props.setUserDataAC(id, email, login);
    //   }
    //   console.log(response);
    // });
  }
  render() {
    // console.log(this.props);
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, {
  getUserData: getUserData,
  logout,
})(HeaderContainer);
