function handleFormSubmit(event){
    event.preventDefault();//connects default variables 
    console.log("Form was submitted");
    console.log(event);
    
}
export default function EventObj(){
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Write something"/>
            <button>Submit</button>
        </form>
    );
}