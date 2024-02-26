"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { useWindowHeight } from "@/hooks/use-window-height";
import Button from "../button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Appcontext } from "@/context";

export default function Layout({ children }) {
  const size = useWindowHeight();
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log(size);
    if (size.width < 992 && size.width !== 0) {
      setShow(false);
    }
  }, [size]);

  return (
    <Appcontext.Provider value={[size]}>
      <div className="h-100">
        <div className="h-100 d-flex">
          <Sidebar show={show} setShow={setShow} />
          <main className="main flex-grow-1 position-relative">
            <Button
              type="button"
              aria-controls={`offcanvasNavbar-expand`}
              id="sidebarCollapse"
              moduleClass="iconBtn"
              variant="primary"
              onClick={() => setShow(!show)}
              className={`toggleButton ${show && "show"}`}
            >
              <MdOutlineKeyboardArrowRight size={25} />
            </Button>

            <div style={{ height: "100vh", overflow: "auto" }}>{children}</div>
          </main>
        </div>
      </div>
    </Appcontext.Provider>
  );
}
