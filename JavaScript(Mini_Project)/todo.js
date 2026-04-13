let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    console.log(inp.value);
    
    let delbtn = document.createElement("button");
    delbtn.innerText="x";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click",function (event) {
    if(event.target.nodeName = "Button") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
        
    }
});



// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });



// Event Delegation
// if  we added new element and we already create event listners 
// we want to add event listners on elemnts newly created 
// we want to apply old event listners to automatically apply on newly created elements for this we use event delegation 
// so on new child we want same event trigred then instead of child we write listner on that childs parent 