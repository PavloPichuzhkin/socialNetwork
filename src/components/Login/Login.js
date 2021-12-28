import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  maxLength,
  minLength,
  required,
} from "../../utils/validator/validators";
import { login } from "../../redux/auth-reduser";
import {
  createField,
  Input,
  TagInputOrTextarea,
} from "../common/FormsControls/FormControls";
import { Redirect } from "react-router";
import style from "../common/FormsControls/FormControls.module.css";
import { NavLink } from "react-router-dom";

const maxLength30 = maxLength(30);
const minLength2 = minLength(2);
// const Input = TagInputOrTextarea("input");

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(
        "Email",
        "email",
        [required, maxLength30, minLength2],
        Input
      )}
      {createField(
        "Password",
        "password",
        [required, maxLength30, minLength2],
        Input,
        { type: "password" }
      )}
      {createField(
        null,
        "rememberMe",
        [required],
        Input,
        { type: "checkbox" },
        "remember me"
      )}

      {/* <div>
        <Field
          validate={[required, maxLength30, minLength2]}
          component={Input}
          placeholder="Email"
          name="email"
        />
      </div> */}
      {/* <div>
        <Field
          validate={[required, maxLength30, minLength2]}
          component={Input}
          placeholder="Password"
          name="password"
          type="password"
        />
      </div> */}
      {/* <div>
        <Field component={Input} type="checkbox" name="rememberMe" />
        remember me
      </div> */}
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

let Login = (props) => {
  const onSabmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
    console.log(formData);
  };
  if (props.isAuth) return <Redirect to={"/profile"} />;
  // if (props.isAuth) return <NavLink to={"/profile"} />;
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSabmit} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login })(Login);
