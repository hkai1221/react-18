/*
 * @Author: Mia
 * @Date: 2022-04-18 10:57:23
 * @Description: 
 */
/*
 * @Author: Mia
 * @Date: 2022-04-18 10:52:25
 * @Description: 
 */
import React from 'react'
import ShowText from './ShowText'

const mockDataArray = new Array(10000).fill(1)

const NewList = ({query}) => {

  return (
    <div>
        {
           mockDataArray.map((item,index)=><div key={index} >
              <ShowText query={query} />
           </div>)
        }
    </div>
  )
}
// TODO 使用 React.memo 做优化
export default React.memo(NewList)