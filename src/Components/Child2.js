/*
 * @Author: Mia
 * @Date: 2022-04-19 09:38:26
 * @Description:
 */
import React, { useState } from "react";

const data = [
  { id: 1, name: "mia" },
  { id: 2, name: "lisa" },
  { id: 3, name: "jim" },
];

const Child2 = () => {
  const [value, setValue] = useState();

  return (
    <div>
      子组件 Child2
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <button onClick={() => setValue(item.name)}>{item.id}</button>
            </div>
          );
        })}
        <b>name</b>: {value}
      </div>
    </div>
  );
};

export default Child2;
