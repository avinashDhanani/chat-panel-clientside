import DropdownBox from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Dropdown(props) {
  const { children, className, ...rest } = props;
  return (
    <DropdownBox className={className} {...rest}>
      {children}
    </DropdownBox>
  );
}

export default Dropdown;

export function DropdownButton(props) {
  const { children, className, ...rest } = props;

  return (
    <DropdownBox.Toggle className={className} {...rest}>
      {children}
    </DropdownBox.Toggle>
  );
}

export function DropdownMenu(props) {
  const { children, className, ...rest } = props;

  return (
    <DropdownBox.Menu className={className} {...rest}>
      {children}
    </DropdownBox.Menu>
  );
}

export function DropdownItem(props) {
  const { children, className, ...rest } = props;

  return (
    <DropdownBox.Item className={className} {...rest}>
      {children}
    </DropdownBox.Item>
  );
}

export function DropdownForArticle(props) {
  return (
    <>
      <DropdownBox
        as={ButtonGroup}
        onChange={(e) => {
          console.log(e);
        }}
      >
        <DropdownBox.Toggle id="dropdown-custom-1" style={{ padding: "9px" }}>
          {props.title}
        </DropdownBox.Toggle>
        <DropdownBox.Menu>
          {props.dropdownValues.map((item) => {
            return (
              <DropdownBox.Item
                eventKey={item.value}
                onClick={() => {
                  props.onChange(item.value);
                }}
              >
                {item.name}
              </DropdownBox.Item>
            );
          })}
        </DropdownBox.Menu>
      </DropdownBox>
    </>
  );
}
