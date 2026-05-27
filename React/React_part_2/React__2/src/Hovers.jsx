
function PrintMe() {
  console.log("hello");
}

function handleOverWelcome() {
  console.log("Welcome");
}

function double () {
  console.log("You Double Clicked");
}

export default function Hovers() {
  return (
    <div>
      <p onMouseOver={handleOverWelcome}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <button onDoubleClick={double}>
        Try Double Click
      </button>    
    </div>
  );
}