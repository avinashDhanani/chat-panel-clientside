import React from "react";
import  ButtonType from "react-bootstrap/Button";
import Styles from "./button.module.scss";

export default function Button(props) {
  const { children,onClick, className, moduleClass, ...rest } = props;
  return (
    <ButtonType type="button"
      className={`${Styles.commonButton} ${Styles[moduleClass]} ${className}`} onClick={onClick}
      {...rest}
    >
      {children}
    </ButtonType>
  );
}
