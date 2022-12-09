function solve (arr){

    let coffeeList = arr.shift().split(" ");
    let number = arr.shift()
   
    for (let el of arr){
        let tokens = el.split(" ");
        let operation = tokens.shift();
        
        switch (operation){
            case "Include":
                coffeeList.push(tokens[0]);
                break;
            case "Remove":
                if (tokens[0] === "first"){
                    coffeeList.splice(0, Number(tokens[1]));
                } else if (tokens[0] === "last"){
                    coffeeList.splice( -Number(tokens[1]));
                }
                break;
            case "Prefer":
               let fromIndex = (tokens[0]);
               let toIndex = (tokens[1]);
               let elementSwap = coffeeList.splice(fromIndex, toIndex)[0]
                coffeeList.splice( toIndex, 0, elementSwap);
            
                break;
            case "Reverse":
                coffeeList.reverse();
        }
    }
    console.log("Coffees:");
    console.log(coffeeList.join(" "));
}
solve (["Arabika Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
"5",
"Include TurkishCoffee", 
"Remove first 2",
"Remove last 1",
"Prefer 3 1",
"Reverse"])