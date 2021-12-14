import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { TagInputOrTextarea } from "../common/FormsControls/FormControls";
import {
  maxLength,
  minLength,
  required,
} from "../../utils/validator/validators";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>
        {props.name} UserId: {props.id}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};
const maxLength10 = maxLength(10);
const minLength2 = minLength(2);
const Textarea = TagInputOrTextarea("textarea");

const DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          // value={props.messagesPage.newMessageText}
          // // className={s.dialogsItems}
          // onChange={updateMessageText}
          placeholder="Enter your TEXT"
          name="dialogMassege"
          validate={[required, maxLength10, minLength2]}
        />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

const DialogReduxForm = reduxForm({
  form: "dialog",
})(DialogForm);

const Dialogs = (props) => {
  console.log(props);
  let DialogItems = props.messagesPage.dialogs.map((userName) => (
    <DialogItem name={userName.name} id={userName.id} />
  ));

  let Messages = props.messagesPage.messages.map((messageItem) => (
    <Message message={messageItem.message} />
  ));

  // let onSendMessageClick = () => {
  //   props.SendMessage();
  // };

  // let updateMessageText = (event) => {
  //   let body = event.target.value;
  //   props.updateMessageText(body);
  // };

  const addNewMessage = (formData) => {
    console.log(formData);
    console.log(props);

    // let body = event.target.value;
    // props.updateMessageText(formData.dialogMassege);
    props.SendMessage(formData.dialogMassege);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{DialogItems}</div>
      <div className={s.messages}>
        <DialogReduxForm onSubmit={addNewMessage} />
        <div>{Messages}</div>
      </div>
      <div></div>
    </div>
  );
};

export default Dialogs;
