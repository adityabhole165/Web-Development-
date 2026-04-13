let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click",function () {
    console.log("div was clicked");
})

ul.addEventListener("click",function (event) {
    event.stopPropagation();
    console.log("Ul was clicked");
})
for(li of lis) {
    li.addEventListener("click",function (event) {
        event.stopPropagation();
        console.log("li was clicked ");
        
    })
}

// Note -
// when we click on div 
// when we click on ul it returns ul was clicked and div was clicked 
// when we trigger any child event then it triggers all above events means parent and above parents parent event.
//    <div>
//         <ul>
//             <li>one </li>
//             <li>two</li>
//             <li>three</li>
//         </ul>
//     </div> 
// here if we click on list item li then it triggers Ul and div also 
// All this is called Event bubbling 

// To avoid bubbling we use 
// event.stopPropagation 