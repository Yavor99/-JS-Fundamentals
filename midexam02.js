function solve(input){
    let line = input.shift().split(" ").map(Number);
    for(let el of input){
        let splitedElement = el.split(" ");
        if(splitedElement[0] === "add"){
           let numberToAdd = splitedElement.slice(3).map(Number).forEach(el => line.splice( 0, 0, el ));
        } else if(splitedElement[0] === "remove"){
            let num = splitedElement.slice(3).map(Number);
            for(let i = 0; i < line.length; i++){
                if(num[0] <= line[i]){
                    line.splice(line[i])
            }
        }
    } else if(splitedElement[0] === "replace"){
        let index = splitedElement[1];
        let value = splitedElement[2];
        let neshto = line.slice(0, line[index]);
        let neshto1 = line.slice(0, line[value]);
        line.replace(0, neshto1, neshto)
    }
    
}
console.log(line);
}
solve((["1 2 3 10 10 6 4 10",
"add to start 1 2 3",
"remove greater than 5",
"find even",
"END"])
)
