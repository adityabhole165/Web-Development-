import Product from "./Product";
import ProConditionals from "./ProConditionals.jsx";
import "./Product.css";

function ProTabCondi() {
    return (
        <>
            <ProConditionals title="Phone" price={3000}/> 
             <ProConditionals title="laptop" price={150000} />
            <ProConditionals title="Earbuds" price={5000} />
        </>
    );
}

export default ProTabCondi;   