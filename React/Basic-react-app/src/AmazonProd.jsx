import TabAmazonPage from "./TabAmazonPage.jsx";

function AmazonProd() {
    let styles ={
        display :"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    };
    return (
        <div style={styles}>
            <TabAmazonPage title="Logitech Max Master" idx ={0} />
            <TabAmazonPage title="Apple Pencil"idx ={1}  />
            <TabAmazonPage title="Zebronics Transformer"idx ={2}  />
            <TabAmazonPage title="Portronics Toad 23" idx ={3} />
        </div>
    );
}

export default AmazonProd;