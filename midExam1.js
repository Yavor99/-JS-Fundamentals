function solve(input) {
    let side = input.shift();
    let sheeds = input.shift();
    let count = 0;

    let areaForPaper = side * side * 6;
    let sum = 0;
    let currentIndex = 1;

    for (let i = 0; i < input.length; i+=2) {
        count++;
         sum += input[i] * input[currentIndex];
         let currentSum = input[i] * input[currentIndex];
         currentIndex += 2;
         if(count % 3 === 0){
            sum -= currentSum
            sum += currentSum - (currentSum * 0.25)
         } else if(count % 5 === 0){
            sum -= currentSum;
         } else if(count === sheeds){
            break;
         }
    }

    

    if(sum < areaForPaper){
        let totalAreaCover = (sum / areaForPaper) * 100;
        let percentage = 100 - totalAreaCover;
        console.log(`You are out of paper! \n${percentage.toFixed(2)}% of the box is not covered.`);
    } else{
        let neshto = ((sum - areaForPaper)/sum)*100;
        console.log(`You've covered the gift box! \n${neshto.toFixed(2)}% wrap paper left.`
       );
        
    }


}
solve((["10",
"5",
"3",
"0.5",
"2.4",
"5",
"3.7",
"1",
"3",
"34.7",
"5",
"80"])

)
