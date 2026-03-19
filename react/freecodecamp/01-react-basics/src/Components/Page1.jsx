import "./Page1.css";
import React from "react";
import { HeaderPage1 } from "./HeaderPage1";
import { MainPage1 } from "./MainPage1";
import { FooterPage1 } from "./FooterPage1";

export const Page1 = () => {
  return (
    <>
      <HeaderPage1 />
      <MainPage1 />
      <FooterPage1 />
    </>
  );
};
