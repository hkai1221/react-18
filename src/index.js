/*
 * @Author: Mia
 * @Date: 2022-04-18 09:26:34
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Outlet,
  Link,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./About";
import Batch from "./Batch";
import Transition from "./Transition";
import SuspenseTest from "./SuspenseTest";
import List from "./List";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
import routerConfig from "./routers/router";
import RouterInd from "./RouterInd";

//TODO ReactDOM.createRoot 严格模式
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <RouterInd />
      {/* <Routes> */}
      {/* <Route exact path="/" element={<App />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/child1" element={<Child1 />}/>
          <Route path="/about/child2" element={<Child2 />}/>
        </Route>
        <Route path="/batch" element={<Batch />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/suspense-test" element={<SuspenseTest />} />
        <Route path="/list/:id" element={<List />} /> */}
      {/* 使用 useRouters 来实现 */}
      {/* </Routes> */}
    </Router>
    <Outlet />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();