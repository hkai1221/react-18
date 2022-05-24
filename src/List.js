/*
 * @Author: Mia
 * @Date: 2022-04-19 09:05:10
 * @Description: 
 */
import React from 'react'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const List = (props) => {

  const params = useParams()
  console.log('params', params)

  const [getParams, setParams] = useSearchParams()

  const name = getParams.getAll('name')
  console.log('name', name, getParams)

  return (
    <div>
      <button onClick={() => {
        setParams({
          name: 'mia',
          age: 23,
        })
      }}>设置 params</button>
      {Array.from({length: 20}, (_, v) => v+1).map(item => {
        return (
          <div key={item}>{item}</div>
        )
      })}
    </div>
  )
}

export default List