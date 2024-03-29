import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../configs/redux/store";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../Dashboard";
import Header from "../../../components/Header";
import Login from "../Login";
import Register from "../Register";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </Provider>
  );
};

export default App;
