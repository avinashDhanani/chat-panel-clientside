import React, { Fragment, useEffect, useState } from "react";
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
import StyledDropzone from "@/components/dropzone";
import axios from "axios";

export default function Article() {
  const [data, setData] = useState(undefined);
  const options = [2,10, 20, 50, 100];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };
  const [modalShow, setModalShow] = useState({ status: false, type: "" });
  const [successModal, setSuccessModal] = useState(false);
  const [exportModal, setExportModal] = useState(false);
  const [tableBodyData, setTableBodyData] = useState("");
  const [txtValue, setTxtValue] = useState("");
  const [responseData, setResponseData] = useState("");
  const [edit, setEdit] = useState(false);
  const [fromData, setFromData] = useState({
    title: "",
    description: "",
    id: ""
  })
  const handleChange = (e) => {
    if(e.target.name == 'textValue') {
      setTxtValue(e.target.value)
    } else {
      setFromData({...fromData, [e.target.name]: e.target.value})
    }
  }
  const manage_dropdown_handler = (item) => {
    switch (item) {
      case "create_folder":
        setModalShow({ status: true, type: "create_folder" });
        break;
      case "add_an_article":
        setModalShow({ status: true, type: "add_an_article" });
        break;
      case "delete_item":
        setModalShow({ status: true, type: "delete_item" });
      case "import_excel_file":
        setExportModal(true);
        break;
    }
  };
  const modal_close = () => {
    setModalShow({ status: false, type: "" });
  };
  const handleData = (data) => {
    let arrReturn = [];
    if(data != "") {
      data.forEach((element, index) => {
        let tempArr = [];
        let key = index+1;
        tempArr.push({
          id: key,
          content: element.id,
        },{
          id: key+1,
          content: element.title
        },{
          id: key+2,
          content: "-"
        })
        
        arrReturn.push(tempArr);
      });
      return arrReturn;  
    }
  }

  const handleEdit = (id) => {
    setEdit(true)
    let data = [];
    responseData.forEach((item) => {
      if(item.id == id) {
        data.push(item);
      }
    })
    setFromData({
      id: data[0].id,
      title: data[0].title,
      description: data[0].description
    })

    setModalShow({ status: true, type: "add_an_article" });
  }
  const getArticleData = async () => {
    await axios
      .get('https://49.0.192.107:5000/api/train/article', {
        params: {
          Key: "",
          page: 0,
          per_page: 10,
          search: txtValue != "" ? txtValue : ""
        }
      })
      .then((response) => {
        if(response != undefined) {
          setResponseData(response.data.article_list)
          const tableData = handleData(response.data.article_list);
          setTableBodyData(tableData)
        }
      })
  }
  const handleDelete = async() => {
    let data = [];
      responseData.forEach((item) => {
        if(item.id == modalShow.id) {
          data.push(item);
        }
      })
    let id = data[0].id;
    await axios
        .delete(`http://49.0.192.107:5000/api/train/article/${id}`, {
         title: fromData.title,
         description: fromData.description,
         id: fromData.id
        })
        .then((response) => {
          if(response != undefined) {
            getArticleData();
            modal_close();
          }
        })
  }
  const handleSubmit = async() => {
    if(edit){
      await axios
        .put('https://49.0.192.107:5000/api/train/article', {
         title: fromData.title,
         description: fromData.description,
         id: fromData.id
        })
        .then((response) => {
          if(response != undefined) {
            getArticleData();
            setFromData({})
            modal_close();
            setEdit(false);
          }
        })
    }else {
      await axios
        .post('https://49.0.192.107:5000/api/train/article', {
         title: fromData.title,
         description: fromData.description
        })
        .then((response) => {
          if(response != undefined) {
            getArticleData();
            setFromData({})
            modal_close();
          }
        })
    }
  }
  useEffect(() => {
    getArticleData();
  }, [])

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
        <div className={Styles.filterWrapper}>
          <div className={Styles.filter}>
            <Form inline>
              <Row className="g-0">
                <Col>
                  <InputType
                    type="text"
                    moduleClass="tableSearch"
                    placeholder="Search"
                    className="mr-sm-2"
                    name="textValue"
                    onChange={handleChange}
                  />
                </Col>
                <Col xs="auto" sm="6">
                  <Button
                    moduleClass="btn-type1"
                    className="ms-3"
                    onClick={() => { getArticleData()}}
                  >
                    Search
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
            TableBodyData={tableBodyData}
            TableProperty={tabProperty}
            handleEdit={handleEdit}
            setModalShow={setModalShow}
          />
        </div>
      </div>
      {/* Modal for create folder */}
      <ModalView
        show={modalShow.status && modalShow.type == "create_folder"}
        onHide={modal_close}
        size="lg"
        modalHead="Create folder"
        modalBody={
          <Row className="py-4">
            <Form.Label column="sm" lg={2} style={{ width: "116px" }}>
              Folder Name :
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Folder Name" />
              {

              }
            </Col>
          </Row>
        }
        modalFooter={
          <>
            <Button
              variant="success"
              className="px-3"
              onClick={() => {
                modal_close(), setSuccessModal(true);
              }}
            >
              confirm
            </Button>
            <Button className="px-4" variant="danger" onClick={modal_close}>
              cancel
            </Button>
          </>
        }
      />
      {/* Modal for create folder successfully*/}
      <ModalView
        className={Styles.modalSuccess}
        show={successModal}
        onHide={() => setSuccessModal(false)}
        modalBody={
          <div className="text-center">
            <h1>Done</h1>
            <h5>Folder created succesfully.</h5>
          </div>
        }
        modalFooter={
          <div className="text-center">
            <Button
              className="px-5"
              variant="success"
              onClick={() => setSuccessModal(false)}
            >
              Close
            </Button>
          </div>
        }
      />

      {/* Modal for Export file*/}
      <ModalView
        modalHead="Excel/Import Excel file"
        className={Styles.ExportModal}
        show={exportModal}
        size="lg"
        onHide={() => setExportModal(false)}
        modalBody={
          <Fragment>
            <Row className="py-3">
              <Form.Label column="sm" lg={2} style={{ width: "116px" }}>
                Topic :
              </Form.Label>
              <Col>
                <Form.Control size="sm" type="text" placeholder="Folder Name" />
              </Col>
            </Row>
            <Form.Label>Select file :</Form.Label>
            <StyledDropzone />
          </Fragment>
        }
        modalFooter={
          <div className="text-center">
            <Button
              className="px-4 me-2"
              variant="success"
              onClick={() => setExportModal(false)}
            >
              confirm
            </Button>
            <Button
              className="px-4"
              variant="danger"
              onClick={() => setExportModal(false)}
            >
              cancel
            </Button>
          </div>
        }
      />

      {/* Add/Edit Article*/}
      <ModalView
        size="lg"
        onHide={modal_close}
        show={modalShow.status && modalShow.type == "add_an_article"}
        modalHead="Edit folder name"
        modalBody={
          <>
          <Row className="py-3">
            <Form.Label column="sm" lg={2} style={{ width: "116px" }}>
              Title :
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Title" name="title" onChange={handleChange} value={fromData['title']} />
            </Col>
          </Row>
          <Row className="py-3">
            <Form.Label column="sm" lg={2} style={{ width: "116px" }}>
              Description :
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Description" name="description" onChange={handleChange} value={fromData['description']} />
            </Col>
          </Row>
          </>
        }
        modalFooter={
          <>
            <Button className="px-4" variant="success" onClick={handleSubmit}>
              confirm
            </Button>
            <Button className="px-4" variant="danger" onClick={modal_close}>
              cancel
            </Button>
          </>
        }
      />

      {/* Delete Modal */}
      <ModalView
        onHide={modal_close}
        show={modalShow.status && modalShow.type == "delete_item"}
        modalHead="Delete"
        modalBody={
          <>
          <Row >
            <Form.Label >
              Are you sure you want to delete this item ?
            </Form.Label>
          </Row>
          </>
        }
        modalFooter={
          <>
            <Button className="px-4" variant="success" onClick={handleDelete}>
              Confirm
            </Button>
            <Button className="px-4" variant="danger" onClick={modal_close}>
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
    name: "Export Excel",
    value: "export_excel",
  },
];
