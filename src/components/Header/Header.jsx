import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { Redirect } from "react-router";

const Header = (props) => {
  // debugger;
  // console.log(props);
  return (
    <header className={s.header}>
      <img
        alt=""
        src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login + " " + "-" + " "}{" "}
            <span onClick={props.logout}>Logout</span>
            {/* <button onClick={props.logout}>Logout</button> */}
          </div>
        ) : (
          // <NavLink to={"/login"}>Login</NavLink>

          <div>
            <Redirect to={"/login"} />
            Login
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
