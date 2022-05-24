import "./App.css";
import { useLocation, useNavigate } from "react-router";

const App = () => {
  const location = useLocation()
  const navigate = useNavigate()

  console.log(location)

  return (
    <>
      <h1>123123123</h1>
      {location.pathname}
      {location.key}
      <button onClick={() => navigate('/about', {state: 'alien'})}>
        跳转到About页
      </button>
    </>
  )
}

export default App
