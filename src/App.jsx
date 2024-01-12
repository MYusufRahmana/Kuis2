import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputForm from './components/InputForm'
import UserCard from './components/UserCard'
import { ClickCounter } from './components/Counter'
import Clicker from './components/Clicker'
import Identity from './components/Identity'

function App() {
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (input) => {
    setUserInput(input);
  };

  return (
    <>
      <ClickCounter />
      <Identity/>
      <Clicker />
    </>
  )
}

export default App
