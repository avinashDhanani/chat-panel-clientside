import React from "react";
import Table from "react-bootstrap/Table";
import TableHead from "./tableHead/TableHead";
import Styles from "./table.module.scss";
import TableBody, {
  TableBodyDataRecover,
  TableBodyUsageActivity,
} from "./tableBody/TableBody";

export default function table(props) {
  const { tableHeadData, TableBodyData, TableProperty } = props;
  return (
    <Table responsive className={Styles.tableType1}>
      <TableHead data={tableHeadData} TableProperty={TableProperty} />
      <TableBody data={TableBodyData} />
    </Table>
  );
}

export function TableUsageActivity(props) {
  const { tableHeadData, TableBodyData, TableProperty } = props;
  return (
    <Table responsive className={Styles.tableType1}>
      <TableHead data={tableHeadData} TableProperty={TableProperty} />
      <TableBodyUsageActivity data={TableBodyData} />
    </Table>
  );
}

export function TableDataRecover(props) {
  const { tableHeadData, TableBodyData, TableProperty } = props;

  return (
    <Table responsive className={Styles.tableType1}>
      <TableHead data={tableHeadData} TableProperty={TableProperty} />
      <TableBodyDataRecover data={TableBodyData} />
    </Table>
  );
}
