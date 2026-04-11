let FavMovie="Fight Club";

let guess = prompt("Guess the Favourite Movie");

while(guess != FavMovie){
    if(guess == "quit"){
        alert("You Quit ");
        break;
    }
    guess= prompt("Wrong guess . Guess the Favourite Movie Again . ");
}
if( guess ==  FavMovie  ){
    alert("Congratulatiations ");
} 