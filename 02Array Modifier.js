function arrayModifier(input) {
    let line = input.shift().split(" ").map(Number);

    let inputLine = input.shift();
    while (inputLine !== "end") {
        let [command, firstIndex, secondIndex] = inputLine.split(" ");
        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        if (command === "swap") {
            let el1 = line[firstIndex];
            let el2 = line[secondIndex];

            line[firstIndex] = el2;
            line[secondIndex] = el1;
        } else if (command === "multiply") {
            line[firstIndex] *= line[secondIndex];
        } else if (command === "decrease") {
            for (let i = 0; i < line.length; i++) {
                line[i] -= 1;
            }
        }

        inputLine = input.shift();
    }
    console.log(line.join(", "));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
)