export default function Activity ({userName, textColor}){
    let style ={ color : textColor};
    return(
        <h1 style={style}>Hello, {userName}</h1>
    );
}