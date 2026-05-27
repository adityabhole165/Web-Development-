import Product from "./Product";
import ProductProp from "./productProp";

function ProductTabProp() {
    let options2 = {a: "Epic", b: "Big-time", c: "Show-time"};
    //Rendering Array Element
    let option1= [<li>"Hi-tech"</li>,<li>"Durable"</li>];
    return (
        <>
            {/* <ProductProp title="phone" price="50,000" features2={options2}/> */}
            <ProductProp title="phone" price="50,000" features2={option1}/>
            <ProductProp title="laptop" price="1,50,000" />
            <ProductProp title="Earbuds" price="5,000" />
        </>
    );
}

export default ProductTabProp;