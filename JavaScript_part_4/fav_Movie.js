let FavMovie="abc";

let guess = prompt("Guess the Favourite Movie");

while((guess != FavMovie) && (guess != "quit")){
    guess= prompt("Wrong guess . Guess the Favourite Movie Again . ");
}
if(FavMovie == guess){
    alert("Congratulatiations ");
} else {
    alert("You Quit ");

}