import React, { useState } from "react";
import Styles from "./index.module.scss";
import Button from "@/components/button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table, { TableUsageActivity } from "@/components/table/table";
import { Container } from "react-bootstrap";
import InputType from "@/components/Input";

export default function UsageActivity() {
  const [data, setData] = useState(undefined);
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const options = [10, 20, 50, 100];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };
  return (
    <Container fluid>
      <div className={Styles.article}>
        <div className={Styles.header}>
          <h2 className="mb-4">Usage Activity</h2>
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
                    // type="submit"
                    moduleClass="btn-type1"
                    className="ms-3"
                    onClick={() => setAdvanceSearch(!advanceSearch)}
                  >
                    Advanced Search
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
        {advanceSearch && (
          <div>
            <div className="border-bottom mb-3">
              <h5>Advanced Search</h5>
            </div>
            <Form className={`${Styles.advancedSearch} mb-3`}>
              <Row className="g-3 mb-2">
                <Col xs={12} lg={4} sm={6}>
                  <Form.Group
                    as={Row}
                    controlId="formStartDate"
                    className={`${Styles.formGrp} g-0`}
                  >
                    <Form.Label column sm="4" xs="3">
                      Start Date :
                    </Form.Label>
                    <Col sm="8" xs="9">
                      <Form.Control type="date" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col xs={12} lg={4} sm={6}>
                  <Form.Group
                    as={Row}
                    controlId="formEndDate"
                    className={`${Styles.formGrp} g-0`}
                  >
                    <Form.Label column sm="4" xs="3">
                      End Date :
                    </Form.Label>
                    <Col sm="8" xs="9">
                      <Form.Control type="date" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row >
                <Col xs={12} lg={4} sm={6}>
                  <Form.Group
                    as={Row}
                    controlId="formEndDate"
                    className={`${Styles.formGrp} g-0`}
                  >
                    <Form.Label column sm="4" xs="3">
                      Filter Data :
                    </Form.Label>
                    <Col sm="8" xs="9">
                      <Form.Select aria-label="Default select example">
                        <option>Select Filter Data</option>
                        <option value="all">All</option>
                        <option value="like">Like</option>
                        <option value="dislike">Dislike</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        )}
        <Row>
          <Col>
            <TableUsageActivity
              tableHeadData={TableHeadData2}
              TableBodyData={tableBodyData2}
              TableProperty={tabProperty}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

let tabProperty = [
  { width: "60px" },
  { width: "70px" },
  { width: "200px" },
  { width: "300px" },
  { width: "150px" },
  { width: "150px" },
  { width: "200px" },
  { width: "200px" },
  { width: "200px" },
  { width: "200px" },
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
    content: "Question",
    lable: "Question",
    sorting: true,
  },
  {
    id: 4,
    content: "Answers",
    lable: "Answers",
    sorting: true,
  },
  {
    id: 5,
    content: "Reply from",
    lable: "Reply from",
    sorting: true,
  },
  {
    id: 6,
    content: "Line",
    lable: "Line",
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
    content: "Like",
    lable: "Like",
    sorting: true,
  },
  {
    id: 9,
    content: "Dislike",
    lable: "Dislike",
    sorting: true,
  },
  {
    id: 10,
    content: "Feedback",
    lable: "Feedback",
    sorting: true,
  },
  {
    id: 11,
    content: "Last edited",
    lable: "Last edited",
    sorting: true,
  },
  {
    id: 12,
    content: "Action",
  },
];

let tableBodyData2 = [
  [
    {
      id: 0,
      content: "1",
    },
    {
      id: 1,
      content: "How to import teacher photos?",
    },
    {
      id: 2,
      content:
        "Steps for importing personnel/teacher photos(Upload personnel photos)",
    },
    {
      id: 3,
      content: "ID1101",
    },
    {
      id: 3,
      content: 3,
    },
    {
      id: 4,
      content: "How to create teacher profile picture.",
    },
    {
      id: 5,
      content: "correct",
    },
    {
      id: 6,
      content: "-",
    },
    {
      id: 7,
      content: "-",
    },
    {
      id: 8,
      content: "16/02/2024 11:50 PM",
    },
  ],
  [
    {
      id: 0,
      content: "2",
    },
    {
      id: 1,
      content: "Take a picture of a stident employee what height?",
    },
    {
      id: 2,
      content:
        "Steps for importing personnel/teacher photos(Upload personnel photos)",
    },
    {
      id: 3,
      content: "ID1102",
    },
    {
      id: 3,
      content: 15,
    },
    {
      id: 4,
      content: "How to create teacher profile picture.",
    },
    {
      id: 5,
      content: "Easy to understand",
    },
    {
      id: 6,
      content: "-",
    },
    {
      id: 7,
      content: "-",
    },
    {
      id: 8,
      content: "16/02/2024 11:50 PM",
    },
  ],
  [
    {
      id: 0,
      content: "3",
    },
    {
      id: 1,
      content: "How to import teacher photos?",
    },
    {
      id: 2,
      content: "Steps for adjusting the status of a student who has resigned",
    },
    {
      id: 3,
      content: "ID1103",
    },
    {
      id: 3,
      content: 18,
    },
    {
      id: 4,
      content: "How to adjusting the status of a student who has resigned",
    },
    {
      id: 5,
      content: "-",
    },
    {
      id: 6,
      content: "Didn't answer the question correctly.",
    },
    {
      id: 7,
      content: "-",
    },
    {
      id: 8,
      content: "16/02/2024 11:50 PM",
    },
  ],
  [
    {
      id: 0,
      content: "4",
    },
    {
      id: 1,
      content: "How to import teacher photos?",
    },
    {
      id: 2,
      content: "Steps for using the School Bright system (For...",
    },
    {
      id: 3,
      content: "ID1104",
    },
    {
      id: 3,
      content: 30,
    },
    {
      id: 4,
      content: "How to create teacher profile picture.",
    },
    {
      id: 5,
      content: "excellent",
    },
    {
      id: 6,
      content: "-",
    },
    {
      id: 7,
      content: "I'd like to add a link to the manual.",
    },
    {
      id: 8,
      content: "16/02/2024 11:50 PM",
    },
  ],
];
