"use client";
import React, { forwardRef, useState } from "react";
import Input from "../Input";
import Button from "../button";
import Styles from "./sidebar.module.scss";
import Link from "next/link";
import { routes } from "./routes";
import { usePathname } from "next/navigation";
import useAppcontext from "@/context";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";

function SidebarBox(props) {
  const pathname = usePathname();
  const { show, setShow } = props;
  const value = useAppcontext();
  return (
    <Navbar expand="lg">
      <Navbar.Offcanvas
        className={Styles.navOffcanvas}
        show={value[0].width < 992 && show}
        backdrop
        onHide={setShow}
      >
        <Offcanvas.Header closeButton className="p-0"></Offcanvas.Header>
        <Offcanvas.Body>
          <div
            className={`${Styles.wrapper} ${show ? Styles.showSidebar : ""}`}
          >
            <div className="border-bottom border-white py-2">
              <Image
                src="/site-logo.png"
                className={Styles.site_logo}
                width={200}
                height={100}
                alt="logo"
              />
            </div>
            <nav className={Styles.sidebar}>
              <div className={Styles.navMenu}>
                <ul className={Styles.navList}>
                  {routes.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className={`${Styles.navItem} ${
                          pathname.includes(item.path.toLowerCase()) && "active"
                        }`}
                      >
                        <Link
                          href={item.path}
                          data-toggle="collapse"
                          aria-expanded="false"
                          className={Styles.navLink}
                        >
                          <span className={Styles.icon}>{item.icon}</span>
                          {""} {item.link}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}

const Sidebar = forwardRef(SidebarBox);
Sidebar.displayName = "Sidebar";
export default Sidebar;
