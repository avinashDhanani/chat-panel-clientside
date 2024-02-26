import React, { useState } from "react";
import Styles from "./index.module.scss";
import Button from "@/components/button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table, { TableUsageActivity } from "@/components/table/table";
import InputType from "@/components/Input";
import { Container } from "react-bootstrap";

export default function TriningSbData() {
  const [data, setData] = useState(undefined);
  const options = [10, 20, 50, 100];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };
  return (
    <Container fluid>
      <div className={Styles.article}>
        <div className={Styles.header}>
          <h2 className="mb-4">Trining SB Data</h2>
        </div>

        <div className={`${Styles.entriesLimit} mb-3`}>
          <span>Show</span>
          <select
            className={Styles.pageSelect}
            onChange={onOptionChangeHandler}
          >
            {options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
          <span>entries</span>
        </div>

        <div className={Styles.filterWrapper}>
          <div className={Styles.filter}>
            <Form inline>
              <Row className="g-0">
                <Col>
                  <InputType
                    type="text"
                    moduleClass="tableSearch"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto" sm="6">
                  <Button
                    type="submit"
                    moduleClass="btn-type1"
                    className="ms-3"
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
          <div className={Styles.thirdMainRow}>
            <Button variant="success" moduleClass="btn-type1">
              Export
            </Button>
          </div>
        </div>
        <div>
          <TableUsageActivity
            tableHeadData={TableHeadData2}
            TableBodyData={tableBodyData2}
            TableProperty={tabProperty}
          />
        </div>
      </div>
    </Container>
  );
}

let tabProperty = [
  { width: "60px" },
  { width: "70px" },
  { width: "110px" },
  { width: "140px" },
  { width: "250px" },
  { width: "150px" },
  { width: "200px" },
  { width: "90px", className: "text-center" },
];

let TableHeadData2 = [
  {
    id: 1,
    content: "",
  },
  {
    id: 2,
    content: "No.",
    lable: "Number",
    sorting: true,
  },
  {
    id: 3,
    content: "School ID",
    lable: "School ID",
    sorting: true,
  },
  {
    id: 4,
    content: "Folder",
    lable: "Folder",
    sorting: true,
  },
  {
    id: 5,
    content: "SubFolder",
    lable: "SubFolder",
    sorting: true,
  },
  {
    id: 6,
    content: "Article Number",
    lable: "Article Number",
    sorting: true,
  },
  {
    id: 7,
    content: "Article title/Heading",
    lable: "Article title/Heading",
    sorting: true,
  },
  {
    id: 8,
    content: "Action",
  },
];

let tableBodyData2 = [
  [
    {
      id: 1,
      content: "1",
    },
    {
      id: 2,
      content: "201",
    },
    {
      id: 3,
      content: "academic",
    },
    {
      id: 4,
      content: "Rules for entering information in various documents",
    },
    {
      id: 5,
      content: 5401,
    },
    {
      id: 6,
      content: "Rules for entring informatin in documents P.P.5",
    },
  ],
  [
    {
      id: 1,
      content: "1",
    },
    {
      id: 2,
      content: "201",
    },
    {
      id: 3,
      content: "academic",
    },
    {
      id: 4,
      content: "Rules for entering information in various documents",
    },
    {
      id: 5,
      content: 5401,
    },
    {
      id: 6,
      content: "Rules for entring informatin in documents P.P.5",
    },
  ],
  [
    {
      id: 1,
      content: "1",
    },
    {
      id: 2,
      content: "201",
    },
    {
      id: 3,
      content: "academic",
    },
    {
      id: 4,
      content: "Rules for entering information in various documents",
    },
    {
      id: 5,
      content: 5401,
    },
    {
      id: 6,
      content: "Rules for entring informatin in documents P.P.5",
    },
  ],
  [
    {
      id: 1,
      content: "1",
    },
    {
      id: 2,
      content: "201",
    },
    {
      id: 3,
      content: "academic",
    },
    {
      id: 4,
      content: "Rules for entering information in various documents",
    },
    {
      id: 5,
      content: 5401,
    },
    {
      id: 6,
      content: "Rules for entring informatin in documents P.P.5",
    },
  ],
];
