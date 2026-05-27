import "./Ticket.css"
import TicketNum from "./TicketNum"
export default function Ticket({ticket}){
    return(
        <div className="Ticket">
            <p>Ticket</p>
            <br />
            {/* <TicketNum num={ticket[0]}/>
            <TicketNum num={ticket[1]}/> */}
            { ticket.map((num,idx) => (
                <TicketNum num={num} key={idx}  />
            ))}
        </div>
    )
}