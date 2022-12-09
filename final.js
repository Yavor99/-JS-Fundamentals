function solve(input){
    let lineOfInput = input.shift().split(" ");
    let line = input.shift();
    while(line !== "Stop"){
       line =  line.split(" ");
        if(line[0] === "Swap"){
            let index = line[1];
            let value = line[2];  
            lineOfInput = lineOfInput.slice(lineOfInput[value])   
            console.log(lineOfInput);   
        }
        line = input.shift();
    }
    
}
solve((["Congratulations! You last also through the have challenge!",
"Swap have last",
"Replace made have",
"Delete 2",
"Put it 4",
"Stop"])
)