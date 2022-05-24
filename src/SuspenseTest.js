/*
 * @Author: Mia
 * @Date: 2022-04-18 13:58:39
 * @Description: 
 */
import React, {Suspense, lazy, useState, useEffect} from 'react'
const  LazyComp = lazy(() => import('./Components/LazyComp'))

const Tab1 = React.lazy(() => import('./Components/SuspenseTest/Tab1'));
const Sub = React.lazy(() => import('./Components/SuspenseTest/Sub'));

const SuspenseTest = () => {

  const [tab, setTab] = useState(1)
  const [count, setCount] = useState(0);


  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  }, []);

  
  return(
    <>
      {/* <Suspense fallback={<>loading...</>}>
        <LazyComp />
      </Suspense> */}


      {/* <button onClick={() => setTab(1)}>1</button>
      <button onClick={() => setTab(2)}>2</button>
      <div>
        <Suspense fallback={<>loading .... </>}>
          {tab === 1 ? <Tab1 /> : <LazyComp />}
        </Suspense>
      </div> */}


      <Suspense fallback={<div>loading...</div>}>
        <Sub count={count} />
      </Suspense>
      <div>count is {count}</div>
    </>
  )
}

export default SuspenseTest