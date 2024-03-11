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
import InputStyles from "../../components/Input/Input.module.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import ModalView from "@/components/Modal/Modal";
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
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Chat() {
  const [showHistory, setShowHistory] = useState(true);
  const [chatList, setChatList] = useState([]);
  const [modalShow, setModalShow] = useState({ status: false, type: "" });
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState({
    title: "",
    id: "",
    userMsg: "",
  });
  const [edit, setEdit] = useState(false);
  const value = useAppcontext();
  const handleChange = (e) => {
    if (e.target.name == "textValue") {
      setTxtValue(e.target.value);
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  let replyMsg = [
    "Determining the \"best\" job in Thailand is subjective and can vary depending on personal preferences, qualifications, and interests. However, some industries tend to have a higher demand for skilled professionals in Thailand. Here are a few sectors that are considered to offer good job opportunities:\n\n1. Tourism and Hospitality: Given Thailand's popularity as a tourist destination, the tourism and hospitality industry provides numerous job opportunities, ranging from hotel management and hospitality services to tour guiding and travel agency roles.\n\n2. Information Technology (IT): The IT sector in Thailand is growing rapidly, and there is a high demand for skilled professionals in fields such as software development, data analysis, web development, and cybersecurity.\n\n3. Finance and Banking: With Thailand's developing economy, there is a demand for professionals in finance and banking sectors. Job opportunities can be found in areas such as accounting, financial analysis, investment banking, and wealth management.\n\n4. Medical and Healthcare: The healthcare industry in Thailand offers various career opportunities, including doctors, nurses, pharmacists, medical researchers, and healthcare administrators.\n\n5. Education and Teaching: English teaching positions, both in schools and private language institutes, are popular among foreigners in Thailand. Additionally, there is a demand for qualified teachers in international schools and institutions of higher education.\n\nIt's important to research and assess your skills, qualifications, and interests to determine which industry and job align best with your goals and aspirations.",
    "In Thailand, salaries can vary greatly depending on factors such as industry, job position, qualifications, experience, and location. Here is a general overview of average monthly salaries in Thailand across various job sectors:\n\n1. Service Industry: Salaries in service-related sectors such as restaurants, hotels, and retail shops can range from 10,000 to 20,000 Thai Baht per month.\n\n2. Manufacturing and Engineering: In manufacturing and engineering sectors, salaries can range from 15,000 to 50,000 Thai Baht per month, depending on the level of expertise and experience.\n\n3. Information Technology: IT professionals in Thailand can expect salaries ranging from 20,000 to 100,000 Thai Baht or more per month, depending on their skills, qualifications, and experience.\n\n4. Finance and Banking: Salaries in the finance and banking sectors can range from 30,000 to 150,000 Thai Baht per month, with higher salaries typically reserved for senior management positions.\n\n5. Medical and Healthcare: In the medical and healthcare industries, salaries vary depending on the position and level of specialization. Doctors can earn between 30,000 to 150,000 Thai Baht per month, while nurses can expect salaries starting from around 15,000 to 40,000 Thai Baht per month.\n\nIt's important to note that these figures are general estimates and can vary based on individual circumstances and negotiations. The cost of living in different regions of Thailand should also be taken into consideration when evaluating salaries.",
    "Thailand is located in Southeast Asia, bordered by Myanmar (Burma) to the northwest, Laos to the northeast, Cambodia to the southeast, and Malaysia to the south. The country has a tropical climate with a monsoon season from May to October and a dry season from November to April.\n\nWhen it comes to salaries in Thailand, it varies greatly depending on the industry, job position, qualifications, and location. On average, the minimum wage in Thailand is around 310 Thai Baht per day (as of 2022). In urban areas and more skilled professions, salaries can range much higher, with average monthly salaries ranging from 15,000 to 50,000 Thai Baht. However, it's important to note that these figures are just averages, and salaries can be higher or lower depending on various factors.",
    "Hello! How can I assist you today?",
  ];
  const handleData = (arrParams) => {
    console.log("ARRpARAMS :: ", arrParams);
    try {
      console.log("arrParams :: ", arrParams);
      if (arrParams != "") {
        let arrReturn = [];
        for (let index = 0; index < arrParams.length; index++) {
          if (arrParams[index].type == 0) {
            let element = arrParams[index];
            let itemData = {};
            if (element) {
              itemData.msgId = element.id;
              itemData.msgContent = element.content;
              itemData.msgType = element.type;
            }

            if (Object.keys(itemData).length != 0) {
              arrReturn.push(itemData);
            }
          } else if (arrParams[index].type == 1) {
            let itemData = {};
            let item = arrParams[index];
            if (item) {
              itemData.replyId = item.id;
              itemData.replyContent = item.content;
              itemData.replyType = item.type;
            }
            if (Object.keys(itemData).length != 0) {
              arrReturn.push(itemData);
            }
          }
        }
        setChatList([...arrReturn]);
      }
    } catch (err) {
      console.log("err handleData :: ", err);
    }
  };

  const getChatMessage = async (arrParams) => {
    if (!arrParams?.id) {
      return;
    }
    setCurrSelectedChat({ ...arrParams });

    setChatList([]);
    try {
      await axios
        .get(`http://49.0.192.107:5000/api/chatlist/${arrParams.id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
        .then(async (response) => {
          console.log("response data 123 :: :: ", response.data);
          if (response) {
            console.log("response data 124 :: :: ");

            handleData(response?.data?.chat_list);
            console.log("response data 125 :: :: ");
          }
        });
    } catch (err) {
      console.log("Err :: ", err);
    }
  };
  const getChatList = async () => {
    await axios
      .get("http://49.0.192.107:5000/api/chatlist", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then(async (response) => {
        if (response) {
          console.log(response);
        }
      });
  };

  useEffect(() => {
    getChatList();
    // getChatMessage();
    getChatHistoryList();
  }, []);
  const handleSubmit = async () => {
    if (edit) {
      let config = {
        method: "put",
        url: "http://49.0.192.107:5000/api/chatlist",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        data: { title: data.title, id: data.id },
      };
      await axios.request(config).then((response) => {
        if (response != undefined) {
          getChatList();
          setData({});
          modal_close();
          setFlag(!flag);
          setEdit(false);
        }
      });
    } else {
      let config = {
        method: "post",
        url: "http://49.0.192.107:5000/api/chatlist",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        data: { title: data.title },
      };
      await axios.request(config).then((response) => {
        if (response != undefined) {
          let responseData = response.data;
          console.log("Response Data :: ", responseData);
          if (responseData?.chat) {
            let tempChatListData = [...chatListData];
            if (
              tempChatListData.filter((item) => item.message == "latest")
                .length > 0
            ) {
              tempChatListData = tempChatListData.map((item) => {
                if (item.message == "latest") {
                  item.listItem = [responseData.chat, ...item.listItem];
                }
                return item;
              });
            } else {
              console.log("tempChatListData 1 :: ", tempChatListData);
              tempChatListData = [
                { id: 0, listItem: [responseData.chat], message: "latest" },
                ...tempChatListData,
              ];
              console.log("tempChatListData 2 :: ", tempChatListData);
            }
            setChatListData([...tempChatListData]);
            getChatMessage(responseData?.chat);
          }
          getChatList();
          setData({});
          modal_close();
          setFlag(!flag);
        }
      });
    }
  };

  const handleDelete = async () => {
    console.log("Data :: ", data);
    let config = {
      method: "delete",
      url: `http://49.0.192.107:5000/api/chatlist/${data.id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios.request(config).then((response) => {
      if (response != undefined) {
        getChatList();
        setChatListData((prevState) => {
          let tempData = [...prevState];
          tempData = tempData.map((item) => {
            item.listItem = item.listItem.filter(
              (item1) => item1.id != data.id
            );
            return item;
          });
          return [...tempData];
        });
        setData({});
        modal_close();
        setFlag(!flag);
      }
    });
  };
  const modal_close = () => {
    setModalShow({ status: false, type: "" });
  };
  useEffect(() => {
    if (value[0].width < 1200 && value[0].width !== 0) {
      setShowHistory(false);
    }
  }, [value[0].width]);

  // Chat List Sidebar and History - START

  const [chatListData, setChatListData] = useState([]);
  const [currSelectedChat, setCurrSelectedChat] = useState({});
  const getChatHistoryList = async () => {
    await axios
      .get("http://49.0.192.107:5000/api/chatlist", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then(async (response) => {
        if (response) {
          console.log("response :: ", response.data);
          setChatListData([
            {
              id: 1,
              listItem: response.data.chat_list,
              message: "8 Days Old",
            },
          ]);
          if (response?.data?.chat_list.length > 0) {
            setCurrSelectedChat(response?.data?.chat_list[0]);
            getChatMessage(response?.data?.chat_list[0]);
          }
        }
      });
  };
  // Chat List Sidebar and History - END

  // User ennter chat message and reply - START
  const [textQutionMessage, setTextQutionMessage] = useState("");
  const handleMsgReply = async () => {
    try {
      if (textQutionMessage != "" && currSelectedChat?.id) {
        setTextQutionMessage("");
        let arrReply = {
          content: textQutionMessage,
          messages: [
            {
              role: "user",
              content: textQutionMessage,
            },
          ],
        };
        let itemDataMessage = {};
        itemDataMessage.msgId = Math.floor(Math.random() * 100000);
        itemDataMessage.msgContent = textQutionMessage;
        itemDataMessage.msgType = 0;
        if (Object.keys(itemDataMessage).length != 0) {
          setChatList((prevState) => [...prevState, itemDataMessage]);
        }
        let config = {
          method: "post",
          url: `http://49.0.192.107:5000/api/chatlist/${currSelectedChat?.id}`,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          data: arrReply,
        };

        const response = await axios.request(config);
        if (response != undefined && response.data) {
          let responseData = response.data;
          if (responseData?.reply) {
            let replyData = responseData.reply;
            let itemData = {};
            itemData.replyId = replyData.id;
            itemData.replyContent = replyData.content;
            itemData.replyType = replyData.type;

            if (Object.keys(itemData).length != 0) {
              setChatList((prevState) => [...prevState, itemData]);
            }
          }
        }
      }
    } catch (err) {
      console.log("err handleMsgReply :: ", err);
    }
  };
  // User ennter chat message and reply - END
  return (
    <div
      className={`${Styles.chatWrapper} ${
        !showHistory || (value[0].width < 1200 && value[0].width !== 0)
          ? "showHistory"
          : ""
      }`}
    >
      <ChatList
        show={showHistory}
        chatListData={chatListData}
        setModalShow={setModalShow}
        setShow={() => setShowHistory(false)}
        history_chat_btn_click_handler={getChatMessage}
        flag={flag}
        setEdit={setEdit}
        setData={setData}
      />

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
          {chatList.map((item) => {
            return (
              <div key={item.id}>
                {item.msgType == 0 ? (
                  <div className={Styles.user}>
                    <div className={Styles.msgBox}>
                      <div className="d-flex flex-column align-items-end">
                        <span className={Styles.userName}>
                          {item.msgContent}
                        </span>
                        {/* <span className={Styles.userMsg}>Hi</span> */}
                      </div>
                      <span className={Styles.profilePic}>
                        <FaUserCircle size={20} color="#6f7078" />
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className={Styles.chatbot}>
                    <div className={Styles.msgBox}>
                      <span className={Styles.profilePic}>
                        <RiRobot2Fill size={20} color="#6f7078" />
                      </span>
                      <div className="d-flex flex-column align-items-start">
                        <span className={Styles.botName}>Chatbot</span>
                        <span className={Styles.botMsg}>
                          {item.replyContent}
                        </span>
                        {/* <span className={Styles.botMsg}>
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
                      </span> */}
                      </div>

                      {/* <div className={Styles.replyMsg}>
                        <Button moduleClass="replyBtn">
                          Reply To Message{""}
                          <HiReply size={17} className="ms-1" />
                        </Button>
                      </div> */}

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
                          <Like />
                          <Dislike />
                          <Forward />
                          <Comment />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* <StartChat/> */}
        </div>

        <div className={Styles.footer}>
          <ImageInput />
          <div className="position-relative">
            <Form.Control
              type="text"
              id="userMsg"
              name="userMsg"
              value={textQutionMessage ? textQutionMessage : ""}
              placeholder={"Type a message to start chat..."}
              onChange={(e) => {
                console.log("e.target.value :: ", e.target.value);
                if (typeof e?.target?.value == "string" || e.target.value == "")
                  setTextQutionMessage(e.target.value);
              }}
              className={`${InputStyles.commonInput} chat-input`}
            />
            <Button
              variant="link"
              className="p-0 send-btn"
              onClick={handleMsgReply}
            >
              <FiSend size={20} color="#000" />
            </Button>
          </div>
        </div>
      </div>

      {/* Add/Edit ChatList*/}
      <ModalView
        onHide={modal_close}
        show={modalShow.status && modalShow.type == "chatList"}
        modalHead="Add/Edit ChatList"
        modalBody={
          <>
            <Row className="py-3">
              <Form.Label column="sm" lg={2} style={{ width: "116px" }}>
                Title :
              </Form.Label>
              <Col>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  value={data["title"]}
                />
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
        modalHead="Delete ChatList"
        modalBody={
          <>
            <Row>
              <Form.Label>
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
    </div>
  );
}

function ChatList(props) {
  const { show, setShow } = props;
  const value = useAppcontext();

  function handelDelete(id) {
    props?.setData({
      id: id,
    });
    props?.setModalShow({ status: true, type: "delete_item" });
  }

  function handleEdit(id, title) {
    props?.setData({
      id: id,
      title: title,
    });
    props?.setModalShow({ status: true, type: "chatList" });
    props?.setEdit(true);
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
                <Button
                  className="mb-3"
                  moduleClass="whiteBtn"
                  variant="white"
                  onClick={() => {
                    props?.setModalShow({ status: true, type: "chatList" });
                  }}
                >
                  <HiOutlinePlusSm size={18} />
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
                {props.chatListData != undefined &&
                  props.chatListData.map((item) => {
                    return (
                      <div key={item.id} className={Styles.chatListInnerBox}>
                        <p className={Styles.fromStartChat}>{item.message}</p>
                        {item.listItem.map((itemList) => {
                          return (
                            <div
                              key={itemList.id}
                              className={Styles.chatListItem}
                            >
                              <span
                                className="d-flex align-items-center cursor-pointer"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  props.history_chat_btn_click_handler(
                                    itemList
                                  );
                                }}
                              >
                                <IoChatboxEllipsesOutline
                                  color="#000"
                                  size={14}
                                />
                                {/* <span className={Styles.date}>15/02/2024</span> */}
                                &nbsp;:&nbsp;
                                <span className={Styles.firstmsg}>
                                  {itemList.title}
                                </span>
                              </span>
                              <Dropdown className={Styles.setting} align="end">
                                <DropdownButton variant="link">
                                  <BsThreeDots size={15} />
                                </DropdownButton>
                                <DropdownMenu>
                                  <DropdownItem
                                    onClick={() =>
                                      handleEdit(itemList.id, itemList.title)
                                    }
                                  >
                                    Edit
                                  </DropdownItem>
                                  <DropdownItem
                                    onClick={() => handelDelete(itemList.id)}
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
