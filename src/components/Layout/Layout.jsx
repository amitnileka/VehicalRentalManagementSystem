import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import {  useLocation } from "react-router-dom";
import LoginHeader from "../UI/LoinHeader";
const Layout = () => {

    const location = useLocation();

    console.log(location.pathname);

  return (
    <>
      { location.pathname=="/login" ?<LoginHeader></LoginHeader>: location.pathname=="/register" ? <LoginHeader></LoginHeader>:<Header /> }
      <div>
        <Routers />
      </div>
      { location.pathname=="/login" ?<></> :location.pathname=="/register" ? <></>:<Footer /> }
    </>
  );
};

export default Layout;
