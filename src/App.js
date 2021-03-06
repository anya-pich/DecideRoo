import React from "react";
import { withRouter } from "react-router-dom";

import { ProvideAuth } from "./components/hooks/useAuth";
import { ProvideCache } from "./components/hooks/useCache";
import Routes from "./config/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ProvideAuth>
      {/* <ProvideCache> */}
        <Header />
        <div className="container py-3">
          <Routes />
        </div>
        <Footer />
      {/* </ProvideCache> */}
    </ProvideAuth>
  );
};

export default withRouter(App);
