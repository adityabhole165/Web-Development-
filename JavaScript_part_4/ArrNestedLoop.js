let Heros = [["Iron Man", "Captain America", "Thor"],["Wonder Woman", "BatMan", "Flash"]];

for(let i = 0; i<Heros.length;i++){
    console.log(`List #${i+1}`);
    console.log(i,Heros[i],Heros[i].length);
    
    for(let j = 0; j<Heros[i].length;j++){
        console.log(Heros[i][j]);
        
    }
}