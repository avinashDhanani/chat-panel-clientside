import React from 'react';
import Dropdown, { DropdownButton, DropdownItem, DropdownMenu } from "../dropdowon";
import { BiCommentDetail } from "react-icons/bi";
import Styles from './index.module.scss';
import InputType from '../Input';
import Button from '../button';


export default function Comment() {
  return (
    <Dropdown className={Styles.comment} drop="down-centered">
      <DropdownButton variant="link" className="p-0">
      <BiCommentDetail color="#000" size={16} />
      </DropdownButton>
      <DropdownMenu>
        <p className={Styles.title}>Report Other Problems (please specify)</p>

        <InputType placeholder="specify details.." className={Styles.suggestInput} as="textarea" row={5}/>

        <div className="text-end mt-2">
            <Button moduleClass="sendBtn">Report</Button>
        </div>
      </DropdownMenu>
    </Dropdown>
  )
}
