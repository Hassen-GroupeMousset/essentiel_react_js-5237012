import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function Header() {
  return (
    <>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </>
  )
}
function CountdownTimer() {
  const [time, setTime] = useState(10);

  //Start counter
  const start = () => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }

  //Reset counter to 0
  const reset = () => setTime(0)


  return (
    <>
      <p><span className={time < 0 ?'text-danger':'text-dark'}>{time}</span> seconds</p>
      <button className="btn btn-outline-secondary" onClick={start}>Go!</button>
      <button className="btn btn-outline-secondary" onClick={reset}>Reset!</button>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(5)

  return (<div className="card">
    <button onClick={() => setCount((count) => count - 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>)
}
function Title({ content }) {
  return <h1 className="text-success">{content}</h1>
}

function Footer() {
  return <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
}

function App() {
  return (
    <>
      <Title content="CountdownTimer " />
      <CountdownTimer />
      {/* <Footer /> */}
    </>
  )
}

export default App
