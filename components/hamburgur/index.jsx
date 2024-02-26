"use client";
import React, { useState } from 'react';
import Styles from './hamburgur.module.scss';

const HamburgerMenu = ({className,show,setShow}) => {
  console.log(show)

  return (
    <div className={`${Styles.hamburgerMenu} ${show ? Styles.open :''} ${className}`} onClick={setShow}>
      <div className={Styles.bar}></div>
      <div className={Styles.bar}></div>
      <div className={Styles.bar}></div>
    </div>
  );
};

export default HamburgerMenu;
