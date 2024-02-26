import React, { useState } from "react";
import Styles from "./index.module.scss";
import Button from "@/components/button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "@/components/table/table";
import { Container } from "react-bootstrap";
import InputType from "@/components/Input";
import { DropdownForArticle } from "@/components/dropdowon";
import ModalView from "@/components/Modal/Modal";

export default function Article() {
  const [data, setData] = useState(undefined);
  const options = [10, 20, 50, 100];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };
  const [modalShow, setModalShow] = useState({ status: false, type: "" });
  const manage_dropdown_handler = (item) => {
    switch (item) {
      case "create_folder":
        setModalShow({ status: true, type: "create_folder" });
        break;
      case "add_an_article":
        setModalShow({ status: true, type: "add_an_article" });
        break;
    }
  };
  const modal_close = () => {
    setModalShow({ status: false, type: "" });
  };
  return (
    <Container fluid>
      <div className={Styles.article}>
        <div className={Styles.header}>
          <h2 className="mb-4">Article</h2>
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
        <div className="d-flex mb-4 justify-content-between align-items-center">
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
                <Col>
                  <Button
                    type="submit"
                    moduleClass="btn-type1"
                    className="ms-3"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>

          <div className={Styles.thirdMainRow}>
            <DropdownForArticle
              title="Manage"
              dropdownValues={defaultManageDropdownValue}
              onChange={manage_dropdown_handler}
            />
            <Button variant="danger" moduleClass="btn-type1">
              Delete Item
            </Button>
          </div>
        </div>

        <div>
          <Table
            tableHeadData={TableHeadData}
            TableBodyData={TableBodyData}
            TableProperty={tabProperty}
          />
        </div>
      </div>
      {/* Modal for create folder */}
      <ModalView
        show={modalShow.status && modalShow.type == "create_folder"}
        modalHead="Create folder"
        modalBody={
          <Row>
            <Form.Label column="sm" lg={2} style={{ width: "116px" }}>
              Folder Name :
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Folder Name" />
            </Col>
          </Row>
        }
        modalFooter={
          <>
            <Button variant="success" onClick={modal_close}>
              confirm
            </Button>
            <Button variant="danger" onClick={modal_close}>
              cancel
            </Button>
          </>
        }
      />

      {/* Edit folder name */}
      <ModalView
        show={modalShow.status && modalShow.type == "add_an_article"}
        modalHead="Edit folder name"
        modalBody={
          <Row>
            <Form.Label column="sm" lg={2} style={{ width: "116px" }}>
              Folder Name :
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Folder Name" />
            </Col>
          </Row>
        }
        modalFooter={
          <>
            <Button variant="success" onClick={modal_close}>
              confirm
            </Button>
            <Button variant="danger" onClick={modal_close}>
              cancel
            </Button>
          </>
        }
      />
    </Container>
  );
}

let tabProperty = [
  { width: "60px" },
  { width: "70px" },
  { width: "200px" },
  { width: "200px" },
  { width: "180px", className: "text-center" },
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
    content: "Name Folder",
    lable: "Name Folder",
    sorting: true,
  },
  {
    id: 4,
    content: "Last Edited",
    lable: "Last Edited",
    sorting: true,
  },
  {
    id: 5,
    content: "Action",
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
      content: "School Information",
    },
    {
      id: 4,
      content: "16/02/2024 11:50 PM",
    },
  ],
  [
    {
      id: 1,
      content: "2",
    },
    {
      id: 2,
      content: "School Information",
    },
    {
      id: 4,
      content: "16/02/2024 11:50 PM",
    },
  ],
  [
    {
      id: 1,
      content: "3",
    },
    {
      id: 2,
      content: "School Information",
    },
    {
      id: 4,
      content: "16/02/2024 11:50 PM",
    },
  ],
  [
    {
      id: 1,
      content: "4",
    },
    {
      id: 2,
      content: "School Information",
    },
    {
      id: 4,
      content: "16/02/2024 11:50 PM",
    },
  ],
];

let defaultManageDropdownValue = [
  {
    id: 1,
    name: "Create Folder",
    value: "create_folder",
  },
  {
    id: 2,
    name: "Add an article",
    value: "add_an_article",
  },
  {
    id: 3,
    name: "Import Excel file",
    value: "import_excel_file",
  },
  {
    id: 4,
    name: "Add an article",
    value: "add_an_article",
  },
];
