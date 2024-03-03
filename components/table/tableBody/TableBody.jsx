import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TfiSearch } from "react-icons/tfi";
import { RiDeviceRecoverLine } from "react-icons/ri";
import Style from "./TableBody.module.scss";
import Button from "@/components/button";
import { useRouter } from 'next/navigation';

export default function TableBody(props) {
  const router = useRouter();  
  return (
    <tbody className={Style.articleTableBody}>
      {props.data.map((item) => {
        return (
          <tr className={Style.atb_row}>
            <td>
              <input type="checkbox" />
            </td>
            {item.map((subItem) => {
              return <td>{subItem.content}</td>;
            })}
            <td>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <Button title="Edit" moduleClass="tableIconBtn">
                  <FiEdit2 size={20} />
                </Button>
                <Button
                  variant="danger"
                  moduleClass="tableIconBtn"
                  title="Delete"
                >
                  <RiDeleteBinLine size={20} />
                </Button>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export function TableBodyUsageActivity(props) {
  const router = useRouter();  
  return (
    <tbody className={Style.articleTableBody}>
      {props.data.map((item) => {
        return (
          <tr className={Style.atb_row}>
            <td>
              <input type="checkbox" />
            </td>
            {item.map((subItem) => {
              return <td>{subItem.content}</td>;
            })}
            <td>
              <div className="d-flex align-items-center justify-content-center">
                <Button onClick={() => router.push('/review')} title="Search" moduleClass="tableIconBtn">
                  <TfiSearch size={20} />
                </Button>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
export function TableBodyDataRecover(props) {
  return (
    <tbody className={Style.articleTableBody}>
      {props.data.map((item) => {
        return (
          <tr className={Style.atb_row}>
            <td>
              <input type="checkbox" />
            </td>
            {item.map((subItem) => {
              return <td>{subItem.content}</td>;
            })}
            <td>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <Button onClick={props.onClick} title="Edit" className="d-flex align-items-center gap-2">
                  <RiDeviceRecoverLine size={20} />
                  <span>Recover Data</span>
                </Button>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
