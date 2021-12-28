import { applyMiddleware, combineReducers, compose, createStore } from "redux";
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(redusers, composeEnhancers(applyMiddleware(thunk)));
// + ;
// + const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
// - const store = createStore(reducer, /* preloadedState, */ compose(
//     applyMiddleware(...middleware)
//   ));
window.__store__ = store;
export default store;
