import { authAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = "social-network/auth/SET_USER_DATA";

let initiolState = {
  userId: null,
  email: null,
  login: null,
  isFatching: false,
  isAuth: false,
};

const authReduser = (state = initiolState, action) => {
  // console.log(action);
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        // isAuth: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const setUserDataAC = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth },
  };
};

// export const getUserData = () => {
//   return (dispatch) => {
//     authAPI.me().then((response) => {
//       if (response.resultCode === 0) {
//         console.log(response);
//         let { id, email, login } = response.data; //response.data.data

//         dispatch(setUserDataAC(id, email, login, true));
//       }
//     });
//   };
// };

//!!!!При рефакторинге на асинк эвейт перестало редиректить с / на профайл - прописал Route exact path="/" АПП компонент
export const getUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  console.log(response);
  if (response.resultCode === 0) {
    // console.log(response);
    let { id, email, login } = response.data; //response.data.data

    dispatch(setUserDataAC(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.resultCode === 0) {
      console.log(response);

      dispatch(getUserData());
    } else {
      let message =
        response.messages.length > 0 ? response.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
      console.log(response);

      dispatch(setUserDataAC(null, null, null, false));
    }
  };
};

export default authReduser;
