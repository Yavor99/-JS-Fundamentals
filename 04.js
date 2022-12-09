function solve(num) {

    let oddSum = 0;
    let evenSum = 0;
    let numL = num.toString();

    for (let char of numL) {
        if (char % 2 === 0) {
            evenSum += Number(char);
        } else {
            oddSum += Number(char);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(1000435)
solve(3495892137259234)