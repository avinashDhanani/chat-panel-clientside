import { BiSolidBookBookmark } from "react-icons/bi";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { LuActivitySquare } from "react-icons/lu";
import { FaRobot } from "react-icons/fa6";
import { School,Delete } from "@/components/svg";

const routes = [
  {
    id: 1,
    link: "Chat",
    path: "/chat",
    icon: <MdOutlineMarkUnreadChatAlt size={25} />,
  },
  {
    id: 2,
    link: "Article",
    path: "/article",
    icon: <BiSolidBookBookmark size={25} />,
  },
  {
    id: 3,
    link: "Usage Activity",
    path: "/usage_activity",
    icon: <LuActivitySquare size={25} />,
  },
  {
    id: 4,
    link: "Training sb data",
    path: "/trining_sb_data",
    icon: <FaRobot size={25} />,
  },
  {
    id: 5,
    link: "School Article",
    path: "/school_articles",
    icon: <School />,
  },
  {
    id: 5,
    link: "Data Recovery",
    path: "/data_recovery",
    icon: <Delete />,
  },
];

export { routes };
