function solve(input) {
    let targetLine = input.shift().split(" ").map(Number);
    let line = input.shift();

    while (line !== "End") {
        let [command, index, damage] = line.split(" ");

        if (command === "Shoot" && index < targetLine.length) {
            targetLine[index] -= damage
            if (targetLine[index] <= 0) {
                targetLine.splice(index, 1)
            }
        } else if (command === "Strike") {
            let strikeIndex = Number(index);
            let radius = Number(damage);
            if (strikeIndex + radius <= targetLine.length - 1 && strikeIndex - radius >= 0) {
                targetLine.splice(strikeIndex - radius, radius * 2 + 1);
            } else {
                console.log('Strike missed!');
            }

        } else if (command === "Add") {
            let currentIndex = index;
            let value = Number(damage);
            if (currentIndex < targetLine.length && currentIndex >= 0) {
                targetLine.splice(currentIndex, 0, value)
            } else {
                console.log(`Invalid placement!`);
            }
        }

        line = input.shift();
    }

    console.log(targetLine.join("|"));


}
solve((["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
)