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
import { withAuthRedirect } from "./hoc/withAuthRedirect";
//способы передачи компонент и пропсов через Роут и атрибут РЕндер

class App extends React.Component {
  profile2 = (props) => {
    return <ProfileContainer />;
  };

  componentDidMount() {
    // debugger;
    this.props.initializeApp();
  }
  // console.log(props);
  render() {
    // debugger;
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              ///// render не component !!! при вводе в текстареа после символа слетает ФОКУС!!!
              <DialogsContainer />
            )}
          />

          <Route
            path="/profile/:userId"
            render={() => this.profile2(this.props)}
          />
          <Route
            // exact
            path="/profile"
            render={() => this.profile2(this.props)}
          />

          <Route exact path="/" render={() => this.profile2(this.props)} />

          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

// const App = (props) => {
//   const profile2 = (props) => {
//     return <ProfileContainer />;
//   };
//   console.log(props);
//   return (
//     <div className="app-wrapper">
//       <HeaderContainer />
//       <Navbar />
//       <div className="app-wrapper-content">
//         <Route
//           path="/dialogs"
//           render={() => (
//             ///// render не component !!! при вводе в текстареа после символа слетает ФОКУС!!!
//             <DialogsContainer store={props.store} />
//           )}
//         />
//         {/* <Route path="/profile" render={() => profile1(props)} /> */}
//         <Route path="/profile/:userId" render={() => profile2(props)} />
//         <Route exact path="/profile" render={() => profile2(props)} />
//         {/* <Route path="/profile" render={profile2(props)} />////////////DOnot WORK */}
//         {/* <Route path="/profile" render={profile2} /> */}
//         <Route path="/users" render={() => <UsersContainer />} />
//         <Route path="/login" render={() => <Login />} />
//       </div>
//     </div>
//   );
// };

// export default withRouter(
//   connect(null, {
//     getUserData,
//   })(App)
// );
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,

  connect(mapStateToProps, {
    initializeApp,
  })
)(App);
