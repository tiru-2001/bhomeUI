import React from "react";
import { Outlet } from "react-router-dom";
import { Header, LeftMenu, RightMenu } from "../components/index";

const Parent = () => {
  return (
    <section className=" min-h-screen ">
      <Header />
      <section className=" flex  h-full ">
        <LeftMenu />

        <section className=" flex-[6]">
          <Outlet />
        </section>

        <RightMenu />
      </section>
    </section>
  );
};

export default Parent;
