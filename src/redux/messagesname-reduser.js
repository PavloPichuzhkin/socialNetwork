const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
let initiolState = {
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
  // newMessageText: "messages text ",
};

const messagesPageReducer = (state = initiolState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        message: action.newMessageText,
      };
      // let stateCopy = { ...state };
      // stateCopy.messages = [...state.messages];
      // stateCopy.messages.push(newMessage);
      // stateCopy.newMessageText = "";
      // // state.messages.push(newMessage);
      // // state.newMessageText = "";
      // return stateCopy;
      return {
        ...state,
        messages: [...state.messages, newMessage],
        // newMessageText: "",
      };
    }

    // case UPDATE_MESSAGE_TEXT: {
    //   // let stateCopy = { ...state };
    //   // stateCopy.newMessageText = action.newMessageText;
    //   // // state.newMessageText = action.newMessageText;
    //   // return stateCopy;
    //   return {
    //     ...state,
    //     newMessageText: action.newMessageText,
    //   };
    // }
    default:
      return state;
  }
};

export const addMessageClickActionCreator = (newMessageText) => {
  return {
    type: ADD_MESSAGE,
    newMessageText,
  };
};
// export const updeteMessageActionCreator = (text) => {
//   return {
//     type: UPDATE_MESSAGE_TEXT,
//     newMessageText: text,
//   };
// };
export default messagesPageReducer;
