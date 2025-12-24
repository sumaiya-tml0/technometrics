import App from "@/App";
import Footer from "../components/common/Footer";
import React from "react";
import { Outlet } from "react-router";
import Header from "@/components/common/Header";
import GetTouch from "@/pages/home/GetTouch";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <GetTouch />
      <Footer />
    </>
  );
};

export default MainLayout;
