import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


const CountdownTimer = () => {
  const [time, setTime] = useState(10);

  //start
  const start = () => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }
  const increment = () => setTime((prevTime) => prevTime + 1);
  const decrement = () => setTime((prevTime) => prevTime - 1);

  return (
    <div className="text-center">
      <h4>{time} seconds</h4>
      <div className="btn-group mt-3">
        <button className="btn btn-danger" onClick={decrement}>
          -
        </button>
        <button className="btn btn-secondary" onClick={start}>
          Go!
        </button>
        <button className="btn btn-success" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

function Header() {
  return <><h1>CountDownTimer</h1><hr /></>
}

function Footer() {
  return <footer className="text-center mt-5 py-3 border-top">
    <p>Explore the docs:</p>
    <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer" className="me-3">Vite Docs</a>
    <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">React Docs</a>
  </footer>
}

const App = () => {
  return (
    <div className="container mt-5">
      <Header />
      <CountdownTimer />
      <Footer />
    </div>
  );
};

export default App
