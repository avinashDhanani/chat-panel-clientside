"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Button from "../button";
import Styles from "./index.module.scss";
import { RxCrossCircled } from "react-icons/rx";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderRadius: 10,
  borderColor: "#d9d9d9",
  borderStyle: "dashed",
  //   backgroundColor: "#fafafa",
  color: "#000",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function StyledDropzone(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      onDrop: (acceptedFiles) => {
        console.log(acceptedFiles);
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      },
    });

  function handleRemove(name) {
    setFiles(files.filter((e) => e.name != name));
  }

  const thumbs = files.map((file) => (
    <div className={Styles.thumb} key={file.name}>
      <div className={Styles.thumbInner}>
        <p className={Styles.fileName}>{file.name}</p>
        <Button
          onClick={() => handleRemove(file.name)}
          variant="link"
          className={Styles.removeBtn}
        >
          <RxCrossCircled size={20} color="#dc3545"/>
        </Button>
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className={`${props.className}`}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div className="d-flex align-items-center gap-3">
          {" "}
          <AiOutlineCloudUpload size={40} color="#000" />
          {""}
          <span>
            Drag file here or <u>click to download</u>
          </span>
        </div>
      </div>
      <aside className={Styles.thumbsContainer}>{thumbs}</aside>
    </div>
  );
}
