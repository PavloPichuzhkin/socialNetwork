import { applyMiddleware, combineReducers, createStore } from "redux";
import messagesPageReducer from "./messagesname-reduser";
import profileReducer from "./profilepage-reduser";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduser from "./app-reduser";

let redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesPageReducer,
  usersPage: usersReduser,
  auth: authReduser,
  form: formReducer,
  app: appReduser,
});
let store = createStore(redusers, applyMiddleware(thunk));
window.store = store;
export default store;
