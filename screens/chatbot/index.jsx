"use client";
import React, { useEffect, useState } from "react";
import Styles from "./index.module.scss";
import Button from "@/components/button";
import ButtonType from "react-bootstrap/Button";
import Input, { ImageInput } from "@/components/Input";
import HamburgerMenu from "@/components/hamburgur";
import Dropdown, {
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/components/dropdowon";
import useAppcontext from "@/context";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import { BsThreeDots } from "react-icons/bs";
import { IoChatboxEllipsesOutline, IoTelescope } from "react-icons/io5";
import { HiOutlinePlusSm, HiReply } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { RiRobot2Fill } from "react-icons/ri";
import {
  MdOutlineContentCopy,
  MdRefresh,
  MdOutlineDelete,
} from "react-icons/md";
import { BiLike, BiDislike, BiCommentDetail } from "react-icons/bi";
import { IoLogoWhatsapp, IoIosArrowDown } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookSquare, FaUserCircle } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Link from "next/link";
import CustomRadioBox from "@/components/checkbox";
import Forward from "@/components/chat-component/forward";
import Like from "@/components/chat-component/like";
import Dislike from "@/components/chat-component/dislike";
import Comment from "@/components/chat-component/comment";

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
        <div className={Styles.header} title="Start Chatting with a chatbot">
          Start Chatting with a chatbot
        </div>
        <div className={Styles.body}>
          {["", ""].map((item) => {
            return (
              <div key={item.id}>
                <div className={Styles.user}>
                  <div className={Styles.msgBox}>
                    <div className="d-flex flex-column align-items-end">
                      <span className={Styles.userName}>You</span>
                      <span className={Styles.userMsg}>Hi</span>
                    </div>
                    <span className={Styles.profilePic}>
                      <FaUserCircle size={20} color="#6f7078" />
                    </span>
                  </div>
                </div>
                <div className={Styles.chatbot}>
                  <div className={Styles.msgBox}>
                    <span className={Styles.profilePic}>
                      <RiRobot2Fill size={20} color="#6f7078" />
                    </span>
                    <div className="d-flex flex-column align-items-start">
                      <span className={Styles.botName}>Chatbot</span>
                      <span className={Styles.botMsg}>
                        Hey! How's it going? What's on your mind today? Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Mattis pellentesque id nibh tortor id aliquet
                        lectus proin. Feugiat vivamus at augue eget arcu. Sem
                        viverra aliquet eget sit amet tellus cras adipiscing.
                        Nunc congue nisi vitae suscipit tellus mauris. Fames ac
                        turpis egestas maecenas pharetra convallis. Ipsum nunc
                        aliquet bibendum enim facilisis gravida
                      </span>
                      <span className={Styles.botMsg}>
                        Feugiat nisl pretium fusce id velit ut tortor. Vitae
                        aliquet nec ullamcorper sit amet risus nullam eget
                        felis. Volutpat diam ut venenatis tellus in metus
                        vulputate. Luctus venenatis lectus magna fringilla urna
                        porttitor rhoncus dolor. Risus viverra adipiscing at in
                        tellus integer feugiat scelerisque.
                      </span>
                    </div>

                    <div className={Styles.replyMsg}>
                      <Button moduleClass="replyBtn">
                        Reply To Message{""}
                        <HiReply size={17} className="ms-1" />
                      </Button>
                    </div>

                    <div className={Styles.draftBox}>
                      <div className={Styles.draftInner}>
                        <span className="labelText">View Other Draft</span>
                        <Dropdown align="end" className={Styles.draftDrop}>
                          <DropdownButton
                            className={Styles.dropBtn}
                            variant="link"
                          >
                            <IoIosArrowDown size={20} color="#000" />
                          </DropdownButton>
                          <DropdownMenu className={Styles.draftMenu}>
                            <div className={Styles.menuContent}>
                              <CustomRadioBox
                                id="draft1"
                                name="draft"
                                badge="Draft 1"
                                content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                              />
                              <CustomRadioBox
                                id="draft2"
                                name="draft"
                                badge="Draft 2"
                                content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                              />
                              <CustomRadioBox
                                id="draft3"
                                name="draft"
                                badge="Draft 3"
                                content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                              />
                              <Button moduleClass="draftBtn" variant="link">
                                <MdRefresh color="#222D32" />
                              </Button>
                            </div>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>

                    <div className={Styles.repliesOuter}>
                      <div className={Styles.replies}>
                        <Button variant="link" className="p-0">
                          <MdOutlineContentCopy size={16} color="#000" />
                        </Button>
                        <Like/>
                        <Dislike/>
                        <Forward />
                        <Comment />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <StartChat/> */}
        </div>

        <div className={Styles.footer}>
          <ImageInput />
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
  const [chatLIst, setChatLIst] = useState([
    {
      id: 1,
      listItem: [{ id: 1 }],
    },
  ]);

  function handelDelete(id, itemID) {
    // setChatLIst(chatLIst[id].listItem.filter((e)=>e.id != itemID));
  }
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
                  <h6 className="align-self-end text-black">Chat History</h6>
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
                {chatLIst.map((item) => {
                  return (
                    <div key={item.id} className={Styles.chatListInnerBox}>
                      <p className={Styles.fromStartChat}>7 days ago</p>
                      {item.listItem.map((itemList) => {
                        return (
                          <div key={itemList} className={Styles.chatListItem}>
                            <span className="d-flex align-items-center">
                              <IoChatboxEllipsesOutline
                                color="#000"
                                size={14}
                              />
                              <span className={Styles.date}>15/02/2024</span>
                              &nbsp;:&nbsp;
                              <span className={Styles.firstmsg}>
                                Phra Aphai Mani djvlkj jdkahakjs lghjka
                                hkgjhgjkahjkhkajgh ...
                              </span>
                            </span>
                            <Dropdown className={Styles.setting} align="end">
                              <DropdownButton variant="link">
                                <BsThreeDots size={15} />
                              </DropdownButton>
                              <DropdownMenu>
                                <DropdownItem
                                  onClick={() =>
                                    handelDelete(item.id, itemList.id)
                                  }
                                >
                                  Delete
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
                {/* <div className={Styles.chatListItem}>
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
                </div> */}
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

const comment = (
  <Popover id="popover-basic" className={Styles.forward}>
    <Popover.Body>
      <Link href="#">
        <TfiEmail color="#000" size={16} />
        E-mail
      </Link>
      <Link href="#">
        <FaFacebookSquare color="#1877F2" size={16} />
        Facebook
      </Link>
      <Link href="#">
        <IoLogoWhatsapp color="#25D366" size={16} />
        Whatsapp
      </Link>
    </Popover.Body>
  </Popover>
);

function StartChat(props) {
  return (
    <div className={Styles.startChat}>
      <h1 className="font-weight-bold">Hello My Name is KRU ai</h1>
      <h6>I am ready to take you on a journey into the world of knowledge</h6>
      <p className="fs-xxs">
        What do you want to learn?I'm ready to answer all your questions.
      </p>
      <Button moduleClass="chatmsgBtn">
        Please help explain the Story. Preparation of lesson plan.
      </Button>
      <Button moduleClass="chatmsgBtn">Write some sample documents</Button>
      <Button moduleClass="chatmsgBtn">Help analyze the exam</Button>
    </div>
  );
}
