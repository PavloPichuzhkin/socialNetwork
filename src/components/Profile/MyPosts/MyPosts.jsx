import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLength,
  minLength,
  required,
} from "../../../utils/validator/validators";
import { TagInputOrTextarea } from "../../common/FormsControls/FormControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLength(10);
const minLength2 = minLength(2);
const Textarea = TagInputOrTextarea("textarea");

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="Enter your POST"
          validate={[required, minLength2, maxLength10]}
        />
      </div>
      <div>
        <button id="create-new-post">Add post</button>
      </div>
    </form>
  );
};
const MyPostsReduxForm = reduxForm({ form: "newPosts" })(MyPostsForm);
const MyPosts = React.memo((props) => {
  // let newPostElement = React.createRef();
  // const addPost = () => {
  //   props.addPost();
  // };
  // const updatePostText = () => {
  //   let text = newPostElement.current.value;
  //   props.updatePostText(text);
  // };

  let Posts = props.profilePage.posts.map((massegeItem) => (
    <Post message={massegeItem.message} likesCount={massegeItem.likesCount} />
  ));

  let sandPostText = (formVal) => {
    console.log(formVal);
    props.addPost(formVal.newPostText);
  };
  console.log("RENDER");
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <MyPostsReduxForm onSubmit={sandPostText} />
      </div>
      <div className={s.posts}>{Posts}</div>
    </div>
  );
});
export default MyPosts;
