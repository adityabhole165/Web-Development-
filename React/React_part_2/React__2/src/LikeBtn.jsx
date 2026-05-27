import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
export default function LikeBtn(){
    let [isclicked, setclicked] = useState(false);

    let[Click, setlikeClick] =useState(0);
    let likeStyle = {color:"red"};
    let toggleLike = () =>{
        // let newVal= !isclicked;       
        // console.log("Clicked");
        // console.log("newVal");

        setclicked(!isclicked);
        setlikeClick(Click+1);
    }
    return(
        <div>
            <p>Clicks = {Click}</p>
            <p onClick={toggleLike}>
               {
                isclicked?(
                    <i className="fa-solid fa-heart" style={likeStyle}></i>
                ):(
                     <i className="fa-regular fa-heart"></i>
                )
               }
           
             </p>
        </div>
    );
}