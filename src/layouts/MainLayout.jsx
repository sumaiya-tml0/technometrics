import App from "@/App";
import Footer from "../components/common/Footer";
import React from "react";
import { Outlet } from "react-router";
import Header from "@/components/common/Header";


const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
