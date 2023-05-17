import React from "react";
import wrapper from "./Wrapper.module.css";

const Card = (props) => {
  return <div className={`${wrapper.main_wrapper}`}>{props.children}</div>;
};

export default Card;
