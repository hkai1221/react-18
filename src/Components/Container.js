/*
 * @Author: Mia
 * @Date: 2022-04-19 09:36:32
 * @Description: 
 */
import React from 'react'
import { Outlet } from 'react-router-dom'

const Container = () => {
  return <>
    <p>这里是嵌套的子路由</p>
    <Outlet />
  </>
}

export default Container