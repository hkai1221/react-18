/*
 * @Author: Mia
 * @Date: 2022-04-18 10:14:29
 * @Description:
 */
import React, { useState } from "react";
import { flushSync } from "react-dom";

const Batch = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    //   setCount(c => c + 1);
    //   setFlag(f => !f);
    setTimeout(() => {
      // TODO 触发批量更新
      // setCount((c) => c + 1);
      // setFlag((f) => !f);

      // 触发两次渲染 如果在请求中多次调用useState，会触发多次渲染
      flushSync(() => {
        setCount((c) => c + 1); // 立刻重渲染
        setFlag((f) => !f); // 立刻重渲染
      })
      // flushSync(() => {
      // })
    }, 1000);
  }
  console.log("render");

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "red" }}>{count}</h1>
    </div>
  );
};

export default Batch;
