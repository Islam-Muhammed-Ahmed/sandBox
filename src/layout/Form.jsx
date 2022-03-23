import React from "react";

import styles from "./Form.module.css";

const Form = (props) => {
  return <form>{props.children}</form>;
};

const Controller = (props) => {
  // console.log(props.children);
  return <div className={styles.control}>{props.children}</div>;
};

Form.Controller = Controller;

export default Form;
