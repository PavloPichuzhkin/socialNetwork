import { authAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { getUserData } from "./auth-reduser";
const SET_INITIALIZED = "SET_INITIALIZED";

let initiolState = {
  initialized: false,
};

const appReduser = (state = initiolState, action) => {
  // console.log(action);
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const initializedSacces = () => {
  return {
    type: SET_INITIALIZED,
  };
};

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getUserData());
    // debugger;
    // dispatch(somthingelse());
    // dispatch(somthingelse());
    Promise.all([promise]).then(() => dispatch(initializedSacces()));
  };
};

export default appReduser;
