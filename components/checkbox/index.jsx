import React from "react";
import Badge from "react-bootstrap/Badge";
import Styles from "./checkbox.module.scss";
import { FiDivideCircle } from "react-icons/fi";
import { Form } from "react-bootstrap";

export default function CustomRadioBox(props) {
  const { id, badge, content, name } = props;
  return (
    <div className={Styles.customRadio}>
      <input id={id ?? content} name={name} type="radio" className={Styles.checkInput} />
      <Form.Label htmlFor={id ?? content} className={Styles.formLabel}>
        <span className={Styles.overLay}></span>
        <Badge className={Styles.badge} bg="secondary">
          {badge}
        </Badge>
        <span className={Styles.text}>{content}</span>
      </Form.Label>
    </div>
  );
}


export function CustomCheckBox(props){
  const { id, content,name } = props;
  return(
    <div className={Styles.customCheck}>
      <input id={id ?? content} name={name} type="checkbox" className={Styles.checkInput} />
      <Form.Label htmlFor={id ?? content} className={Styles.formLabel}>
        {content}
      </Form.Label>
    </div>
  )
}
