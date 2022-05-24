/*
 * @Author: Mia
 * @Date: 2022-04-19 11:35:39
 * @Description: 
 */
import React, { useState } from 'react'
import '../styles/RenderTest.css'

const RenderChild = (props) => {

  const {value, arr} = props

  const [childVal, setChildVal] = useState()

  console.log('子组件渲染-------------')

  return (
    <div className='son-container'>
      {childVal}
      {/* {value && <p>{value}</p>} */}
      {value && <p>{value}</p>}
      <button onClick={() => setChildVal(Math.random(1,2))}>更新子组件的值</button>
      {arr.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </div>
  )
}

export default React.memo(RenderChild) 
// export default RenderChild