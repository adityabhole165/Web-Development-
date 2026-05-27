import "./Product.css";

function ProConditionals({ title, price, features }) {
   let isDiscount = price > 30000;
    let style = { backgroundColor : isDiscount ? "yellow":"" };
         return (
            <div className="ProConditionals" style={style}>
                <h3>{title}</h3>
                <h3>Price : {price}</h3>
                {/* Avoid Extra Paragraph Node */}
                {/* <p>{(price > 30000) ? <p>"Discount 5%"</p>:""}</p> */}
                {/* {(price > 30000) ? <p>"Discount 5%"</p>:null} */}
                {/* {(price > 30000)&& <p>"Discount 5%"</p>} */}
                {isDiscount && <p>"Discount 5%"</p>}
            </div>
        );

    // This repeats 
    //   if(price > 30000){
//       return (
//         <div className="ProConditionals">
//             <h3>{title}</h3>
//             <h3>Price : {price}</h3>
//             <p>Discount of 5 %</p>
//         </div>
//     );
//   } else {
//       return (
//         <div className="ProConditionals">
//             <h3>{title}</h3>
//             <h3>Price : {price}</h3>
//         </div>
//     );
//   }
        // let isDiscount = ;
     
}


export default ProConditionals;