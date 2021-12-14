import React from "react";
import loading from "../../../assets/images/loading.gif";
let Preloader = (props) => {
  return (
    <div>
      <img src={loading} alt="" />
    </div>
  );
};
export default Preloader;
