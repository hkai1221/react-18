/*
 * @Author: Mia
 * @Date: 2022-04-18 10:52:25
 * @Description:  startTransition
 */
import React, {useDeferredValue, useTransition, useMemo} from "react";
import NewList from "./Components/NewList";
import { debounce} from 'lodash'

const Transition = () => {
  const [value, setInputValue] = React.useState("");

  const [isTransition, setTransion] = React.useState(false);
  const [query, setSearchQuery] = React.useState("");
  
  // TODO useTransition
  // const [isPending1, startTransition] = useTransition()

  // TODO useDeferredValue
  // const query = useDeferredValue(value)

  // TODO 防抖
  // const SetSearchQueryDebounce = useMemo(()=> debounce((value)=> setSearchQuery(value),1000)  ,[])

  const handleChange = (e) => {
    /* 高优先级任务 —— 改变搜索条件 */
    setInputValue(e.target.value);

    
    // TODO 使用 useTransition
    if (isTransition) {
      /* transition 模式 */
      React.startTransition(() => {
        /* 低优先级任务 —— 改变搜索过滤后列表状态  */
        setSearchQuery(e.target.value);
      });
    } else {
      /* 不加优化，传统模式 */
      setSearchQuery(e.target.value);
    }

    // TODO useTransition
    // startTransition(() => {
    //   setSearchQuery(e.target.value)
    // })
      
      // TODO 防抖
      // SetSearchQueryDebounce(e.target.value)
  };

  return (
    <div>
      <div>{isTransition ? "transition" : "normal"}</div>
      <button onClick={() => setTransion(!isTransition)}>
        {isTransition ? "transition" : "normal"}{" "}
      </button>
      <input onChange={handleChange} placeholder="输入搜索内容" value={value} />
      {/* {isPending1 && <div>isTransition</div>} */}
      <NewList query={query} />
    </div>
  );
};

export default Transition;
