import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Routes from "./config/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserModel from "./models/user";

const App = (props) => {
  const [currentUser, setStateUser] = useState(localStorage.getItem("uid"));

  function setCurrentUser(uid) {
    localStorage.setItem("uid", uid);
    setStateUser(uid);
  }

  function logout() {
    UserModel.logout()
      .then((res) => {
        localStorage.removeItem("uid");
        setStateUser(null);
        console.log(res);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  }

  return (
    <>
      <Header currentUser={currentUser} logout={logout} />
      <div className="container py-3">
        <Routes currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </div>
      <Footer />
    </>
  );
};

export default withRouter(App);
