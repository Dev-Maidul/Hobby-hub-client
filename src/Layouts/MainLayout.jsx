import React from "react";

import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Fade } from "react-awesome-reveal";

const MainLayout = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Fade>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </Fade>
    </div>
  );
};

export default MainLayout;
