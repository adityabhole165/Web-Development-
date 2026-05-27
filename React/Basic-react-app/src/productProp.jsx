// import "./Product.css";

// function ProductProp({title ,price,features2}) {
//     console.log(title);
//     console.log(price);
//     const list = features.map((feature, index) => 
//     <li key={index}>{feature}</li>
//   );    return(
//         <div className="Product">
//             <h3>Product Title {title }</h3>
//             <h3>Product Discription Price: {price}</h3>
//                {/* {features2 && (
//                 <>
//                     <p>{features2.a}</p>
//                     <p>{features2.b}</p>
//                     <p>{features2.c}</p>
//                 </>
//             )} */}
// {/* 
//             {features2 && Array.isArray(features2) && (
//                 <ul>
//                     {features2.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             )} */}

//             <ul>{list}</ul>   
//         </div>
//     );
// }
// export default ProductProp;


import "./Product.css";

function ProductProp({ title, price, features2 }) {
    console.log(title);
    console.log(price);

    const list = features2?.map((feature, index) => 
        <li key={index}>{feature}</li>
    );

    return (
        <div className="Product">
            <h3>Product Title {title}</h3>
            <h3>Product Discription Price: {price}</h3>

            {list && <ul>{list}</ul>}   
        </div>
    );
}

export default ProductProp;