import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function Header(){
    return(
        <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    )
  }
   
  function Title(){
    return (
        <h1>Mon Premier Projet React</h1>
    )
  }

  function Counter(){
    const [count, setCount] = useState(2)
    return(
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    ) 
  } 

  function Footer({content}){
     <p className="read-the-docs">
       {content}
      </p>
  }

  return (
    <>
      <Header />
      <Title />
      <Counter />
      <Footer content = " Click on the Vite and React logos to learn more"/>
     
    </>
  )
}


export default App
