import React from "react";
import s from "./Dialogs.module.css";
import Dialogs from "./Dialogs";
import {
  addMessageClickActionCreator,
  updeteMessageActionCreator,
} from "../../redux/messagesname-reduser";
import StoreContext from "../../StoreContext";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    // isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    SendMessage: (newMessageText) => {
      dispatch(addMessageClickActionCreator(newMessageText));
    },
    // updateMessageText: (body) => {
    //   let action = updeteMessageActionCreator(body);
    //   dispatch(action);
    // },
  };
};
let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);
const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

export default DialogsContainer;
