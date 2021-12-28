import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { initializeApp } from "./redux/app-reduser";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import { Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  profile = (props) => {
    return <ProfileContainer />;
  };

  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />

          <Route
            path="/profile/:userId"
            render={() => this.profile(this.props)}
          />
          <Route
            exact
            path="/profile"
            render={() => this.profile(this.props)}
          />

          <Route exact path="/" render={() => <ProfileContainer />} />

          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,

  connect(mapStateToProps, {
    initializeApp,
  })
)(App);
