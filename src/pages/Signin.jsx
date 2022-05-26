import Login from "components/login/Login";
import PageHeader from "components/page-header/PageHeader";
import React from "react";
import bg from "../assets/footer-bg.jpg";
function Signin() {
  return (
    <>
      <div className="container">
        <PageHeader>
          <Login />
        </PageHeader>
      </div>
    </>
  );
}

export default Signin;
