import { useState } from "react";
import "./Lottery.css" ; 
import {genTicket , sum} from "./helper.js" ;
import Ticket from "./Ticket.jsx";
import Button from "./button.jsx";

// export default function Lottery({n=3,winningSum=15}){
export default function Lottery({n=3,winCondition}){
    // let [ticket, setTicket] = useState([0,0,0]);
    // let [ticket, setTicket] = useState(genTicket(3));
    let [ticket, setTicket] = useState(genTicket(n));
    
    // let isWinning = sum(ticket) === 15  ;
    
    // let isWinning = sum(ticket) ===   winningSum;

    let isWinning = winCondition(ticket);
    
    let buyTicket = ()  => {
        // setTicket(genTicket(3));
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1> Lottery Game </h1>
            <div className="ticket">
                {/* <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span> */}
                <Ticket ticket={ticket}/>
            </div>
            <Button action={buyTicket} />
            {/* <button onClick={buyTicket }>Buy new Ticket </button> */}
            <h3>{isWinning && "Congratulations, you won " } </h3>
        </div>
    );
}