function solve(number){
    let sumOfDevisors = 0;

    for (let current = 1; current < number; current++){
        if (number % current === 0)  {
            sumOfDevisors += current;
        }
    }

    if (sumOfDevisors === number){
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}
solve(6)