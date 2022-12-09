function solve(arr) {
    let neededExperience = arr.shift();
    let fightCount = arr.shift();
    let fights = 0;
    let sumOfExperience = 0;

    for (let el of arr) {
        fights++;
        if (fights === 3) {
            el += (el * 0.15)
        } else if (fights === 5) {
            el -= (el * 0.10)
        } else if (fights === 15) {
            el += (el * 0.05)
        }
        sumOfExperience += el;

        if (sumOfExperience >= neededExperience) {
            break;
        }
    }
    if (sumOfExperience >= neededExperience) {
        console.log(`Player successfully collected his needed experience for ${fights} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(neededExperience - sumOfExperience).toFixed(2)} more needed.`);
    }

}
solve([500,
    5,
    50,
    100,
    200,
    100,
    20])