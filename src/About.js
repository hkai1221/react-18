/*
 * @Author: Mia
 * @Date: 2022-04-18 09:36:12
 * @Description:
 */
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Container from "./Components/Container";

const About = () => {
  const location = useLocation();
  console.log("about", location);

  return (
    <>
      <h1>123123</h1>
      <div>
        <Link to={"/about/child1"}> child1 </Link>
        <Link to={"/about/child2"}> child2 </Link>
      </div>
      <Container />
    </>
  );
};

export default About;
