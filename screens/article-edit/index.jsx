import React from "react";
import Styles from "./index.module.scss";
import { MdBook } from "react-icons/md";
import Button from "@/components/button";
import { Form } from "react-bootstrap";
import InputType from "@/components/Input";
import StyledDropzone from "@/components/dropzone";

export default function ArticleEdit() {
  return (
    <div className={Styles.articleEdit}>
      <div className={Styles.heading}>
        <div className="d-flex  gap-3 align-items-center">
          <MdBook size={40} color="#00bcd4" />
          <h2 className="fw-bold mb-0">Knowledge</h2>
        </div>
        <div className="d-flex gap-2 rightBtn">
          <Button className="px-4" variant="success">
            Save
          </Button>
          <Button className="px-4" variant="danger">
            Cancel
          </Button>
        </div>
      </div>
      <div className={Styles.mainBody}>
        <Form>
          <div className="mb-3 d-flex align-items-center gap-3">
            <Form.Label className="mb-1 fw-medium">Heading</Form.Label>
            <InputType placeholder="Which organization emerged after world war ended?" />
          </div>

          <div className="mb-3">
            <Form.Label className="fw-medium mb-0">Instruction</Form.Label>
            <InputType
              as="textarea"
              rows={5}
              type="text"
              placeholder="Social Studied Grade 1 Indicator W.1.1"
            />
          </div>

          <div className="mb-3">
            <Form.Label className="fw-medium mb-0">Input</Form.Label>
            <InputType
              as="textarea"
              rows={4}
              type="text"
              placeholder="Fill in aditional extentions."
            />
          </div>

          <div className="mb-3" controlId="formHorizontalPassword">
            <Form.Label className="fw-medium mb-0">Output</Form.Label>
            <InputType
              as="textarea"
              rows={10}
              type="text"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </div>

          <Form.Label className="fw-medium mb-1">
            Reference Information
          </Form.Label>
          <div className="mb-3 d-flex align-items-center gap-3">
            <Form.Label className="fw-medium">Refer</Form.Label>
            <InputType type="text" placeholder="http://www.schoolbright.com/" />
          </div>

          <div className="mb-3">
            <Form.Label className="fw-medium">Select File</Form.Label>
            <StyledDropzone className={`m-0 ${Styles.dropZone}`}/>
          </div>
        </Form>
      </div>
      <div className={Styles.footer}>05/01/2024 10:30:00</div>
    </div>
  );
}
