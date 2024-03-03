import { Form } from "react-bootstrap";
import Styles from "./Input.module.scss";
import { CgImage } from "react-icons/cg";

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

export function ImageInput(props) {
  const {
    name,id="fileInput"
  } = props;
  return (
    <div className={Styles.ImageInput}>
      <input
        name={name}
        type="file"
        id={id}
      />
      <Form.Label htmlFor={id}>
        <CgImage size={20} color="#000" />
      </Form.Label>
    </div>
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
