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

const LoginForm = () => {
  const router = useRouter();

  const on_login_form_handler = (e) => {
    e.preventDefault();
    router.push("/chat");
  }
  return (
    <div className={Styles.loginOuter}>
    <Container>
      <div className={Styles.loginContainer}>
        <div className="text-center">  
          <Image src="/site-logo.png" className={Styles.site_logo} width={200} height={100} alt="logo"/>
        </div>
        {/* <h2 className={Styles.heading}>Login</h2> */}
        <Form  onSubmit={on_login_form_handler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Label>Username</Label>
            <div className="position-relative">
              <FaRegUser size={14} color="#666" className={Styles.startIcon} />
              <Input
                type="text"
                moduleClass="startIcon"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Label>Password</Label>
            <InputPass
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </Form.Group>
          <Button moduleClass="btn-grad" type="submit">
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
