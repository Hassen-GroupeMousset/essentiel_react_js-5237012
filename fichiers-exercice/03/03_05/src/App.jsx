import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


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

function Title({ content }) {
  return <h1 className="text-success">{content}</h1>
}

function App() {
  return (
    <>
      <Title content="CountdownTimer " />
      <CountdownTimer />
    </>
  )
}

export default App
