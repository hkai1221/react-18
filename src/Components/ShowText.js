/*
 * @Author: Mia
 * @Date: 2022-04-18 10:54:50
 * @Description: 
 */

import React from 'react'

const ShowText = (props) => {
  const {query} = props
  const text = 'asdfghjk'
  let children
  if(query && text.indexOf(query) >= 0 ){
      /* 找到匹配的关键词 */
      const arr = text.split(query)
      children = <div>{arr[0]}<span style={{ color:'pink' }} >{query}</span>{arr[1]} </div>
  }else{
     children = <div>{text}</div>
  }
  console.log('query',query)
  return <div>{children}</div>
}

export default ShowText