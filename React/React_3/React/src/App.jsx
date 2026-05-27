import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Lottery from './Lottery'
import TicketNum from './TicketNum.jsx'
import Ticket  from './Ticket.jsx'
import { sum } from './helper.js'
function App() {

 
  let winCond = (ticket) => {
    return  ticket[0] === 0;
  }
 
  //all num equal 
 
  // let winCond = (ticket) => {
  //   return ticket.every((num) => num === ticket[0]);
  // }
  
  // sum

  // let winCond = (ticket) => {
  //   return sum(ticket) === 15
  // }
  return (
    <>
     {/* <Lottery/> */}
     {/* <div style={{ display: "flex", gap: "4px",justifyContent:"center" }}>

     <Ticket ticket = {[0,1,2]}/>
     <Ticket ticket = {[0,1,2,5,6]}/> */}
     {/* <Ticket ticket = {3}/>0
     <Ticket ticket = {2}/>  */}
     {/* <TicketNum num = {5}/>
     <TicketNum num = {3}/>
     <TicketNum num = {2}/>  */}
     {/* </div> */}

     {/* <Lottery n={3} winningSum={15}/> */}
     
     <Lottery n={3} winCondition = {winCond}/>
    </>
  ) 
}

export default App
