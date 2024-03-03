import React, { useState } from "react";
import Styles from "./index.module.scss";
import Button from "@/components/button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table, { TableDataRecover } from "@/components/table/table";
import InputType from "@/components/Input";
import { Container } from "react-bootstrap";
import ModalView from "@/components/Modal/Modal";

export default function DataRecovery() {
  const [data, setData] = useState(undefined);
  const options = [10, 20, 50, 100];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };
  const [successModal, setSuccessModal] = useState(false);
  const [recoveryConfirm, setRecoveryConfirm] = useState(false);

  return (
    <Container fluid>
      <div className={Styles.article}>
        <div className={Styles.header}>
          <h2 className="mb-4">Deleted Items</h2>
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
        <div className="mb-4">
          <Form className={Styles.dateForm}>
            <Form.Group
              as={Row}
              controlId="formStartDate"
              className={`${Styles.formGrp} g-0`}
            >
              <Form.Label column sm="4" xs="3">
                Start Date :
              </Form.Label>
              <Col sm="8" xs="9">
                <Form.Control type="date" placeholder="Password" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formEndDate"
              className={`${Styles.formGrp} g-0`}
            >
              <Form.Label column sm="4" xs="3">
                End Date :
              </Form.Label>
              <Col sm="8" xs="9">
                <Form.Control type="date" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>
          <div className={Styles.filter}>
            <Form inline>
              <Row className="g-0">
                <Col>
                  <InputType
                    type="text"
                    moduleClass="tableSearch"
                    placeholder="Search"
                    className="mr-sm-2"
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
        </div>

        <div>
          <TableDataRecover
            tableHeadData={TableHeadData}
            TableBodyData={TableBodyData}
            TableProperty={tabProperty}
            onClick={() => setRecoveryConfirm(true)}
          />
        </div>
      </div>

      {/* Modal for create folder successfully*/}
      <ModalView
        className={Styles.modalSuccess}
        show={recoveryConfirm}
        onHide={() => setRecoveryConfirm(false)}
        modalBody={
          <div className="text-center">
            <h2 className="title mb-3 fw-bold">Confirm data recovery</h2>
            <h6 className="desc">Do you want to confirm data recovery?</h6>
          </div>
        }
        modalFooter={
          <>
            <Button
              variant="success"
              className="px-4"
              onClick={() => {
                setSuccessModal(true), setRecoveryConfirm(false);
              }}
            >
              Confirm
            </Button>
            <Button variant="danger" className="px-4" onClick={() => setRecoveryConfirm(false)}>
              Cancel
            </Button>
          </>
        }
      />

      {/* Modal for Confirm data recovery*/}
      <ModalView
        className={Styles.modalSuccess}
        show={successModal}
        onHide={() => setSuccessModal(false)}
        modalBody={
          <div className="text-center">
            <h1 className="title mb-3 fw-bold">Done</h1>
            <h6 className="desc">Data recovered succesfully.</h6>
          </div>
        }
        modalFooter={
          <Button variant="success" className="px-5" onClick={() => setSuccessModal(false)}>
            Close
          </Button>
        }
      />
    </Container>
  );
}
let tabProperty = [
  { width: "60px" },
  { width: "70px" },
  { width: "80px" },
  { width: "140px" },
  { width: "230px" },
  { width: "170px" },
  { width: "200px" },
  { width: "200px", className: "text-center" },
];

let TableHeadData = [
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
    content: "Id",
    lable: "Id",
    sorting: true,
  },
  {
    id: 4,
    content: "Articles",
    lable: "Articles",
    sorting: true,
  },
  {
    id: 5,
    content: "Contact",
    lable: "Contact",
    sorting: true,
  },
  {
    id: 6,
    content: "Created By",
    lable: "Created By",
    sorting: true,
  },
  {
    id: 7,
    content: "Last edited",
    lable: "Last edited",
    sorting: true,
  },
  {
    id: 8,
    content: "",
  },
];

let TableBodyData = [
  [
    {
      id: 1,
      content: "1",
    },
    {
      id: 2,
      content: "001",
    },
    {
      id: 3,
      content: "An application for...",
    },
    {
      id: 4,
      content: "Application for students to take online exames SB E...",
    },
    {
      id: 5,
      content: "Narin Schoolbright",
    },
    {
      id: 6,
      content: "17/02/2024 01:07PM",
    },
  ],
];
