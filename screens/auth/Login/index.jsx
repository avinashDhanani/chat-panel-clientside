"use client";
import React, { useState } from "react";
import Styles from "./login.module.scss";
import Form from "react-bootstrap/Form";
import Input, { Label } from "@/components/Input";
import { MdLockOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Button from "@/components/button";
import { Container } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";

const LoginForm = () => {
  const router = useRouter();
  let accessToken = "";
  const [fromData, setFromData] = useState({
    username: "",
    password: ""
  })
  const handleChange = (e) => {
    setFromData({...fromData, [e.target.name]: e.target.value})
  }
  const on_login_form_handler = async() => {
    if(fromData.username != "" && fromData.password != "") {
      await axios
        .post("http://49.0.192.107:5000/api/signin", {
          email: fromData.username,
          password: fromData.password,
        })
        .then((response) => {
          if (
            response.data.access_token != "" &&
            response.data.access_token != undefined
          ) {
            accessToken = response.data.access_token;
            router.push("/chat");
          }
        });
    }

  }
  return (
    <div className={Styles.loginOuter}>
    <Container>
      <div className={Styles.loginContainer}>
        <div className="text-center">  
          <Image src="/site-logo.png" className={Styles.site_logo} width={200} height={100} alt="logo"/>
        </div>
        {/* <h2 className={Styles.heading}>Login</h2> */}
        <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Label>Username</Label>
            <div className="position-relative">
              <FaRegUser size={14} color="#666" className={Styles.startIcon} />
              <Input
                type="text"
                moduleClass="startIcon"
                id="username"
                name="username"
                onChange={handleChange}
                placeholder="Enter your username"
                value={fromData['username'] || ""}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Label>Password</Label>
            <InputPass
              id="password"
              name="password"
              placeholder="Enter your password"
              value={fromData['password'] || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Button moduleClass="btn-grad" onClick={on_login_form_handler}>
            Sign in
          </Button>
        </Form>
      </div>
    </Container>
    </div>
  );
};

function InputPass(props) {
  const { ...rest } = props;
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="position-relative">
      <MdLockOutline size={16} color="#666" className={Styles.startIcon} />
      <Input
        moduleClass="startIcon"
        className="endIcon"
        value={props?.value}
        name={props?.name}
        onChange={props?.onChange}
        type={show ? "text" : "password"}
        {...rest}
      />
      <Button
        variant="link"
        moduleClass="passButton"
        type="button"
        onClick={() => setShow(!show)}
      >
        {show ? <IoEyeOffOutline /> : <IoEyeOutline />}
      </Button>
    </div>
  );
}

export default LoginForm;
