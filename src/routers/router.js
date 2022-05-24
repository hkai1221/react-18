/*
 * @Author: Mia
 * @Date: 2022-04-19 09:57:50
 * @Description:
 */

import About from "../About"
import App from "../App"
import Batch from "../Batch"
import Child1 from "../Components/Child1"
import Child2 from "../Components/Child2"
import List from "../List"
import SuspenseTest from "../SuspenseTest"
import Transition from "../Transition"
import RenderTest from "../RenderTest"

const routerConfig = [
  {
    path: '/',
    name: 'home',
    element: <App />
  },
  {
    path: '/about',
    name: 'about',
    element: <About />,
    children: [
      {
        path: '/about/child1',
        element: <Child1 />
      },
      {
        path: '/about/child2',
        element: <Child2 />
      }
    ]
  },
  {
    path: '/batch',
    name: 'batch',
    element: <Batch />
  },
  {
    path: '/transition',
    name: 'transition',
    element: <Transition />
  },
  {
    path: '/suspense-test',
    name: 'suspense',
    element: <SuspenseTest />
  },  
  {
    path: '/list',
    name: 'list',
    element: <List />
  },
  {
    path: '/render-test',
    name: 'render',
    element: <RenderTest />
  },
]

export default routerConfig