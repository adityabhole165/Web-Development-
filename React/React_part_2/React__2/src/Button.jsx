function PrintMe() {
    console.log("hello");
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus, non praesentium modi quisquam cum voluptas perspiciatis aliquam, a molestias eveniet, aspernatur nesciunt.
    </p>
    
}
export default function Button() {
    return (
        <div>
            <button onClick={PrintMe}>Click Me </button>
        </div>
    );
}