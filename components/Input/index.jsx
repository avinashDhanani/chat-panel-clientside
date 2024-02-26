import { Form } from "react-bootstrap";
import Styles from "./Input.module.scss";

export default function InputType(props) {
  const {
    type = "text",
    name,
    placeholder,
    moduleClass,
    className,
    ...rest
  } = props;
  return (
    <Form.Control
      type={type}
      id="username"
      name={name}
      placeholder={placeholder}
      className={`${Styles.commonInput} ${Styles[moduleClass]} ${className}`}
      {...rest}
    />
  );
}

export function Label(props) {
  const { children, ...rest } = props;
  return (
    <Form.Label className={Styles.label} {...rest}>
      {children}
    </Form.Label>
  );
}
