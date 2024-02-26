import React from "react";
import { FaSort } from "react-icons/fa";
function TableHead(props) {

  const {data, TableProperty} = props;
  return (
    <thead>
      <tr>
        {data.map((item,index) => {
          return (
            <th className={TableProperty[index].className} 
            style={{width: TableProperty[index].width}}>
            {/* <th> */}
              {item.content}
              {item.sorting && <FaSort />}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHead;
