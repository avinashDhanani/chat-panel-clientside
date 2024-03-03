"use client";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./index.module.scss";
import Button from "@/components/button";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from 'next/navigation';


export default function ReviewPage() {
  const router = useRouter();
  return (
    <div className={Styles.review}>
        <div className="text-center pb-4 border-bottom header">
          <h1 className="fw-bold">Heading</h1>
        </div>
        <div className="py-3">
          <div className="d-flex align-items-center">
            <p className="text-nowrap">
              18/01/2023 08:54:00 Schoolbright :&nbsp;
            </p>
            <p>Schoolbright</p>
          </div>
          <div className="d-flex flex-column flex-sm-row align-items-start mb-5">
            <p className="text-nowrap">18/01/2023 08:54:00 Kru Ai :&nbsp;</p>
            <div>
              <p>Schoolbright</p>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>Record no : 02-096-2550</p>
                <p>Official Line : @jabjai</p>
                <p>E-mail : cs@schoolbright.co</p>
                <p>Thanks</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top px-3 pt-3 pb-4 footer">
          <Button
            onClick={() => router.back()}
            className="px-4 d-flex align-items-center"
            moduleClass="replyBtn"
          >
            <MdKeyboardArrowLeft size={18} />
            {""}
            Back
          </Button>
        </div>
    </div>
  );
}
