import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

// export const withAuthRedirect = (Component) => {
//   class RedirectComponent extends React.Component {
//     render() {
//         if (!this.props.isAuth) return <Redirect to="/login" />;
//         return <Component  {...this.props}/>
//   }
// }
//   return RedirectComponent;
// }

export const withAuthRedirect = (Component) => {
  function redirectComponent(props) {
    if (!props.isAuth) return <Redirect to="/login" />;
    return <Component {...props} />;
  }
  let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
  });
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    redirectComponent
  );

  return ConnectedAuthRedirectComponent;
};
