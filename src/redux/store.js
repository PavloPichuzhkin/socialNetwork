import profileReducer from "./profilepage-reduser";
import messagesPageReducer from "./messagesname-reduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
      ],
      newPostText: " posts text textarea",
    },
    messagesPage: {
      dialogs: [
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],

      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-kamasutra?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
      ],
      newMessageText: "messages text ",
    },
  },
  _collSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._collSubscriber = observer; // паттерн Паттерн проектирования — это часто встречающееся решение определённой проблемы при проектировании архитектуры программ.
  },

  // _addMessage() {
  //   // debugger;
  //   let newMessage = {
  //     id: 5,
  //     message: this._state.messagesPage.newMessageText,
  //   };
  //   this._state.messagesPage.messages.push(newMessage);
  //   this._state.messagesPage.newMessageText = "";
  //   this._collSubscriber(this._state);
  // },
  // _updateMessageText(messageText) {
  //   // debugger;
  //   this._state.messagesPage.newMessageText = messageText; ///!!!!
  //   this._collSubscriber(this._state);
  // },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesPageReducer(
      this._state.messagesPage,
      action
    );
    this._collSubscriber(this._state);

    //  if (action.type === ADD_MESSAGE) {
    //   this._addMessage();
    // } else if (action.type === UPDATE_MESSAGE_TEXT) {
    //   this._updateMessageText(action.newMessageText);
    // }
  },
};

export default store;
window.state = store.getState;
