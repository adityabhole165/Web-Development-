export default function Price({oldPrice,newPrice}){
    let oldstyles = {
        textDecorationLine : "line-through"
    };
    let newstyles = {
        fontWeight: "bold"
    };
    let styles={
        marginTop: "2.5rem",
        backgroundColor:"#e0c367",
        height: "30px",
        borderRadius :"14px",
        borderBottomRightRadius :"14px",
        width:"100%"
    }
    return (
        <div style={styles} >
            <span style={oldstyles}>{oldPrice}</span>
            &nbsp;
            &nbsp;
            <span style={newstyles}>{newPrice}</span>
        </div>
    );
}