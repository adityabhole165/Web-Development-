import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Forms from './Fomrs'
import CommentsForm from './CommentsForm'
import Counter from './Counter'
import Joker from './Joker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Forms/> */} 
      {/* <CommentsForm/> */}
      {/* <Counter/> */}
      <Joker/>
    </>
  )
}

export default App
