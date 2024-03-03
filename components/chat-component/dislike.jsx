import React from "react";
import Dropdown, {
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "../dropdowon";
import { BiDislike } from "react-icons/bi";
import Styles from "./index.module.scss";
import { CustomCheckBox } from "../checkbox";
import InputType from "../Input";
import Button from "../button";

export default function Dislike() {
  return (
    <Dropdown className={Styles.dislike} drop="down-centered">
      <DropdownButton variant="link" className="p-0">
        <BiDislike color="#000" size={16} />
      </DropdownButton>
      <DropdownMenu>
        <p className={Styles.title}>Why did you choose this rating?(Optional)</p>

        <div className="d-flex align-items-center gap-2">
          <CustomCheckBox content="Not Accurate" name="like" />
          <CustomCheckBox content="Offensive / Unsafe" name="like" />
          <CustomCheckBox content="Other" name="like" />
        </div>
        <InputType placeholder="additional suggestions.." className={Styles.suggestInput} as="textarea" row={3}/>

        <div className="text-end mt-2">
            <Button moduleClass="sendBtn">Send answer</Button>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
}
