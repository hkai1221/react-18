/*
 * @Author: Mia
 * @Date: 2022-04-19 11:32:17
 * @Description: 
 */
// import { Button } from 'antd'
import React, { useState } from 'react'
import RenderChild from './Components/RenderChild'
import './styles/RenderTest.css'

const RenderTest = () => {
  const [fatVal, setFatVal] = useState()
  const [arrVal, setArrVal] = useState([])

  console.log('父组件渲染')

  return (
      <div className="fat-container">
        {fatVal}
        <button onClick={() => setFatVal(Math.random(0,1) > 0.5 ? 1 : 2)}>更新父组件的值</button>
        <button onClick={() => setArrVal(Array.from({length: 20}, (_, i) => Math.random(0,1)>0.5 ? '1': '2'))}>传递数组给父组件</button>
        <RenderChild value={fatVal} arr={arrVal}/>
        <button>123123</button>
      </div>
  )
}

export default RenderTest