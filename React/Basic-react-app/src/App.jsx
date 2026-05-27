import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './Title.jsx'
import TitleCurly from './TitleCurly.jsx'
import Product from './Product.jsx'
import ProductTab from './ProductTab.jsx'
import ProductProp from './productProp.jsx'
import ProductTabProp from './ProductTabProp.jsx';
import ProTabCondi from "./ProTabCondi.jsx"; 
import Activity  from './Activity.jsx';
import AmazonProd  from "./AmazonProd.jsx";
function Discription () {
  return <h3>This is Discription </h3>
}


function App() {

  // <button>Check Info</button>
  // return (
  //   <>
  //     <h1>Hello World </h1>
  //     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolore harum repudiandae.</p>
  //     <button type="button">Check </button>
  //   </>
  // )

  let name = "Aditya";
  // return (
  //   <>
  //     <h1>This is my app component</h1>
  //     <p>inside app component we have : </p>
  //     <Title/>
  //     <Discription/>
  //     <Title/>
  //     <Discription/>
  //     <TitleCurly/>
  //     <p>Hello , {name}</p>
  //     <p>Hello , {name.toUpperCase()}</p>
  //   </>
  // );


  // Structure component
          <h2>Blockbuster Deals  | Shop Now </h2>

  return (
    // <>
    //   <Product/>
    //   <Product/>
    //   <Product/>

    // </>
    // <ProductTabProp/>
    // <>
    // <Activity userName="Aditya" textColor="red"/>
    // <Activity userName="Karn" textColor="pink"/>
    // <ProTabCondi/>
    // </>
  
    <>
      <h2 style={{ color: "", alignItems:"center", marginTop:"2rem"

      }} >Blockbuster Deals | Shop Now</h2>
      <AmazonProd />
    </>
  );

}

export default App
