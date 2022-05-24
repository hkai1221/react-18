/*
 * @Author: Mia
 * @Date: 2022-04-19 10:12:07
 * @Description:
 */
import React from "react";
import routerConfig from "./routers/router";
import { Link, useRoutes } from "react-router-dom";

import "./styles/RouterInd.css";

const RouterInd = () => {
  const router = useRoutes(routerConfig);
  return (
    <>
      <div className="nav-container">
        {routerConfig.map((item, index) => {
          return (
            <div key={index}>
              <Link to={item.path}>{item.name}</Link>
            </div>
          );
        })}
      </div>
      {router}
    </>
  );
};

export default RouterInd;
