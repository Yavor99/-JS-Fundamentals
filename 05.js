function solve(input) {
    for (let el of input) {
        let current = String(el);
        let reverse = String(el).split('').reverse().join('');

        if (reverse === current) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
solve([123, 323, 421, 121])