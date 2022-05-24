/*
 * @Author: Mia
 * @Date: 2022-04-18 13:59:29
 * @Description: 
 */
import React from 'react'

const LazyComp = () => {
  return (
    <div>
      {Array.from({length: 100}, (_, ind) => ind +1).map((item, index) => {
        return (
          <div key={index}>{item}</div>
        )
      })}
    </div>
  )
}

export default LazyComp