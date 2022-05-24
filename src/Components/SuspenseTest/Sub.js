/*
 * @Author: Mia
 * @Date: 2022-04-29 10:46:25
 * @Description:
 */
import React from "react";

const Sub = ({ count }) => {

  const handleClick = () => {
    // fetch("https://www.fastmock.site/mock/8a39218d5e115ef537c1f15cab71c234/react_project/api/swrTest").then(res => {
    //   console.log(res)
    // })
  }

  return (
    <>
      <div>Sub count: {count}</div>
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default Sub;
