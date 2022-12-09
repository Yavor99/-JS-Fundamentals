function solve(number) {
    let arr = [];
    let complete = '%'.repeat(number / 10);
    let incomplete = '.'.repeat(10 - complete.length);

    arr.push(`${complete}${incomplete}`);

    if (number === 100) {
        console.log(`100% Complete!`);
    } else {
        console.log(`${number}% [${arr}]`);
        console.log(`Still loading...`);
    }
}
solve(10);