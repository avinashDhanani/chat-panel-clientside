import React from "react";
import { TiArrowForwardOutline } from "react-icons/ti";
import Dropdown, { DropdownButton, DropdownItem, DropdownMenu } from "../dropdowon";
import Styles from './index.module.scss';
import { IoLogoWhatsapp } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";

export default function Forward() {
  return (
    <Dropdown className={Styles.forward} drop="end">
      <DropdownButton variant="link" className="p-0">
        <TiArrowForwardOutline color="#000" size={19} />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem>
          <TfiEmail color="#000" size={16} />
          <span>E-mail</span>
        </DropdownItem>
        <DropdownItem>
          <FaFacebookSquare color="#1877F2" size={16} />
          <span>Facebook</span>
        </DropdownItem>
        <DropdownItem>
          <IoLogoWhatsapp color="#25D366" size={16} />
          <span>Whatsapp</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
