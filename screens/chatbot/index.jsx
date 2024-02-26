"use client";
import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import Button from "@/components/button";
import ButtonType from "react-bootstrap/Button";
import { HiOutlinePlusSm } from "react-icons/hi";
import { MdOutlineDelete } from "react-icons/md";
import { CgImage } from "react-icons/cg";
import Input from "@/components/Input";
import { FiSend } from "react-icons/fi";
import HamburgerMenu from "@/components/hamburgur";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Dropdown, {
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/components/dropdowon";
import { RiRobot2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import useAppcontext from "@/context";
import { MdOutlineContentCopy } from "react-icons/md";
import Navbar from "react-bootstrap/Navbar";
import { BiLike, BiDislike } from "react-icons/bi";
import Offcanvas from "react-bootstrap/Offcanvas";
import { TiArrowForwardOutline } from "react-icons/ti";
import { BiCommentDetail } from "react-icons/bi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Popover from "react-bootstrap/Popover";
import Link from "next/link";

export default function Chat() {
  const [showHistory, setShowHistory] = useState(true);
  const value = useAppcontext();

  useEffect(() => {
    if (value[0].width < 1200 && value[0].width !== 0) {
      setShowHistory(false);
    }
  }, [value[0].width]);


  return (
    <div
      className={`${Styles.chatWrapper} ${
        !showHistory || (value[0].width < 1200 && value[0].width !== 0)
          ? "showHistory"
          : ""
      }`}
    >
      <ChatList show={showHistory} setShow={() => setShowHistory(false)} />

      <div className={Styles.chatPanelOuter}>
        <HamburgerMenu
          show={showHistory}
          setShow={() => setShowHistory(!showHistory)}
          className={Styles.menu}
        />
        <div className={Styles.header} title="Start Chatting with a chatbot">Start Chatting with a chatbot</div>
        <div className={Styles.body}>
          <div className={Styles.user}>
            <div className={Styles.msgBox}>
              <div className="d-flex flex-column align-items-end">
                <span className={Styles.userName}>You</span>
                <span className={Styles.userMsg}>Hi</span>
              </div>
              <span className={Styles.profilePic}>
                <FaUserCircle size={20} color="#fff" />
              </span>
            </div>
          </div>
          <div className={Styles.chatbot}>
            <div className={Styles.msgBox}>
              <span className={Styles.profilePic}>
                <RiRobot2Fill size={20} color="#fff" />
              </span>
              <div className="d-flex flex-column align-items-start">
                <span className={Styles.botName}>Chatbot</span>
                <span className={Styles.botMsg}>
                  Hey! How's it going? What's on your mind today?
                </span>
              </div>
              <div className={Styles.repliesOuter}>
                <div className={Styles.replies}>
                  <Button variant="link" className="p-0">
                    <MdOutlineContentCopy size={16} color="#000" />
                  </Button>
                  <OverlayTrigger
                  rootClose
                    trigger="click"
                    placement="bottom"
                    overlay={like}
                  >
                    <ButtonType variant="link" className="p-0">
                      <BiLike color="#000" size={16} />
                    </ButtonType>
                  </OverlayTrigger>
                  <OverlayTrigger
                  rootClose
                    trigger="click"
                    placement="bottom"
                    overlay={dislike}
                  >
                    <ButtonType variant="link" className="p-0">
                      <BiDislike color="#000" size={16} />
                    </ButtonType>
                  </OverlayTrigger>
                  <OverlayTrigger
                  rootClose
                    trigger="click"
                    placement="right"
                    overlay={forward}
                  >
                    <ButtonType variant="link" className="p-0">
                      <TiArrowForwardOutline color="#000" size={19} />
                    </ButtonType>
                  </OverlayTrigger>
                  <BiCommentDetail color="#000" size={16} />
                </div>
              </div>
            </div>
          </div>
            {/* <StartChat/> */}
        </div>

        <div className={Styles.footer}>
          <CgImage size={20} color="#fff" />
          <div className="position-relative">
            <Input
              type="text"
              id="username"
              name="username"
              moduleClass="roundBorder"
              className="chat-input"
              placeholder="Type a message to start chat..."
            />
            <Button variant="link" className="p-0 send-btn">
              <FiSend size={20} color="#000" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatList(props) {
  const { show, setShow } = props;
  const value = useAppcontext();
  return (
    <Navbar expand="xl" className="p-0">
      <Navbar.Offcanvas
        className={`${Styles.chatListOffcanvas}`}
        show={value[0].width < 1200 && show}
        backdrop
        onHide={setShow}
        placement="end"
      >
        <Offcanvas.Header closeButton className="p-0"></Offcanvas.Header>
        <Offcanvas.Body>
          <div className={`${Styles.chatListOuter} ${show ? "" : "hide"}`}>
            <div className={Styles.chatListInner}>
              <div>
                <Button className="mb-3" moduleClass="whiteBtn" variant="white">
                  <HiOutlinePlusSm size={18} />
                  {""}
                  Start a new chat
                </Button>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="align-self-end text-white">Chat History</h6>
                  <Button
                    className="mb-2 "
                    moduleClass="whiteBtn"
                    variant="white"
                  >
                    <MdOutlineDelete size={18} />
                    {""}Clear History
                  </Button>
                </div>
              </div>
              <div className={Styles.chatList}>
                <p className={Styles.fromStartChat}>7 days ago</p>
                <div className={Styles.chatListItem}>
                  <span className="d-flex align-items-center">
                    <IoChatboxEllipsesOutline size={14} />
                    <span className={Styles.date}>15/02/2024</span>&nbsp;:&nbsp;
                    <span className={Styles.firstmsg}>
                      Phra Aphai Mani djvlkj jdkahakjs lghjka hkgjhgjkahjkhkajgh
                      ...
                    </span>
                  </span>
                  <Dropdown className={Styles.setting} align="end">
                    <DropdownButton variant="link">
                      <BsThreeDots size={15} />
                    </DropdownButton>
                    <DropdownMenu>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div className={Styles.chatListItem}>
                  <span className="d-flex align-items-center">
                    <IoChatboxEllipsesOutline size={14} />
                    <span className={Styles.date}>16/02/2024</span>&nbsp;:&nbsp;
                    <span className={Styles.firstmsg}>
                      Hi flkgkjd jhfl j gkdh lf kjghdkghd hl hdsjlhg j{" "}
                    </span>
                  </span>
                  <Dropdown className={Styles.setting} align="end">
                    <DropdownButton variant="link">
                      <BsThreeDots size={15} />
                    </DropdownButton>
                    <DropdownMenu>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}

const like = (
  <Popover id="popover-basic">
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const dislike = (
  <Popover id="popover-basic">
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const forward = (
  <Popover id="popover-basic" className={Styles.forward}>
    <Popover.Body>
      <Link href="#"><TfiEmail color="#000" size={16}/>E-mail</Link>
      <Link href="#"><FaFacebookSquare color="#1877F2" size={16}/>Facebook</Link>
      <Link href="#"><IoLogoWhatsapp color="#25D366" size={16}/>Whatsapp</Link>
    </Popover.Body>
  </Popover>
);


function StartChat(props){
  return(
    <div className={Styles.startChat}>
      <h1 className="font-weight-bold">Hello My Name is KRU ai</h1>
      <h6>I am ready to take you on a journey into the world of knowledge</h6>
      <p className="fs-xxs">What do you want to learn?I'm ready to answer all your questions.</p>
      <Button moduleClass="chatmsgBtn">Please help explain the Story. Preparation of lesson plan.</Button>
      <Button moduleClass="chatmsgBtn">Write some sample documents</Button>
      <Button moduleClass="chatmsgBtn">Help analyze the exam</Button>
    </div>
  )
}