import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './Button.jsx'
import Hovers from './Hovers.jsx'
import EventObj from './EventObj.jsx'
import Counter from './Counter.jsx'
import LikeBtn from './LikeBtn.jsx'
import TodoList from './TodoList.jsx'

function App() {

  return (
    <>
    <h1>Events</h1>
    <Button/>
    <Hovers/>
    <EventObj/>
    <Counter/>
    <LikeBtn/>
   < TodoList/>
    </>


  );
}

export default App
